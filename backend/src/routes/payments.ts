import { Hono } from "hono"
import { BucketService } from "../services/bucket"
import { MpPaymentService } from "../services/mercadopago"
import { EnvironmentMiddlewares, type EnvironmentSecrets } from "../middlewares/environments"

export const payments = new Hono<{ Variables: EnvironmentSecrets }>()
payments.use(EnvironmentMiddlewares.mercadopagoSecrets)
payments.use(EnvironmentMiddlewares.bucketSecrets)

payments.get('/confirm', async (c) => {
    const { payment_id } = c.req.query()

    const bucketName = c.get('bucketName')
    const bucketConfig = c.get('bucketConfig')
    const mpAccessToken = c.get('mpAccessToken')

    const mpPaymetService = new MpPaymentService(mpAccessToken)

    try {
        const response = await mpPaymetService.getPayment(payment_id)
        
        if(!response.isApproved) return c.json({ message: 'Payment not approved' }, 400)

        const bucketService = new BucketService(bucketName, bucketConfig)
        const productSignedUrl = await bucketService.getFileUrl(response.productId)

        console.log(`Payment approved for ${response.productTitle}`)
        return c.json({ message: `Payment approved for ${response.productTitle}`, url: productSignedUrl })
        
    } catch (err) {
        console.error('Error at verify payment', err)
        return c.text('Error at verify payment', 500)
    }
})