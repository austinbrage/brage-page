import { Hono } from "hono"
import { Resend } from "Resend"
import { BucketService } from "../services/bucket"
import { MpPaymentService } from "../services/mercadopago"
import { EnvironmentMiddlewares, type EnvironmentSecrets } from "../middlewares/environments"
import { type KVNamespace } from "@cloudflare/workers-types"

type KV_NAMESPACE = {
    BUYERS: KVNamespace
}

export const payments = new Hono<{ 
    Variables: EnvironmentSecrets, 
    Bindings: KV_NAMESPACE 
}>()

payments.use(EnvironmentMiddlewares.mercadopagoSecrets)
payments.use(EnvironmentMiddlewares.resendSecrets)
payments.use(EnvironmentMiddlewares.bucketSecrets)

payments.get('/confirm', async (c) => {
    const payment_id = c.req.query('payment_id')

    const bucketName = c.get('bucketName')
    const resendApiKey = c.get('resendApiKey')  
    const bucketConfig = c.get('bucketConfig')
    const mpAccessToken = c.get('mpAccessToken')

    const resend = new Resend(resendApiKey)
    const mpPaymetService = new MpPaymentService(mpAccessToken)

    if(!payment_id) return c.json({ 
        success: false, 
        message: 'Missing payment id' 
    }, 400)

    try {
        const response = await mpPaymetService.getPayment(payment_id)
        
        if(!response.isApproved) return c.json({ 
            success: false, 
            message: 'Payment not approved' 
        }, 402)

        const bucketService = new BucketService(bucketName, bucketConfig)
        const productSignedUrl = await bucketService.getFileUrl(response.productId)

        await c.env.BUYERS.put(payment_id.toString(), JSON.stringify(response.buyerData))
        console.log(`Payment approved for ${response.productTitle}`)
        
        try {
            await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'agustinbrage19@gmail.com',
                subject: 'Bragetools success payment',
                html: JSON.stringify(response.buyerData, null, 2)
            })
        }catch (emailError) {
            console.error(`Failed to send email: ${emailError}`)
        } finally {
            return c.json({ 
                success: true, 
                message: `Payment approved for ${response.productTitle}`, 
                url: productSignedUrl 
            })
        }
        
    } catch (err) {
        console.error('Error at verify payment', err)
        
        if(err instanceof Error) return c.json({
            success: false,
            message: `Error at verify payment`,
            details: JSON.parse(err.message)
        }, 500)

        return c.json({
            success: false,
            message: 'Error at verify payment',
            details: 'unknown'
        }, 500)
    }
})