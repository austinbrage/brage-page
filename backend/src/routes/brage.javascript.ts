import { Hono } from "hono"
import { BucketService } from "../services/bucket"
import { MercadoPagoService } from "../services/mercadopago"

export const brageJavascript = new Hono().basePath('/javascript')

brageJavascript.post('/buy/basic', async (c) => {
    const body = await c.req.json()

    const { payerName, payerEmail } = body
    const mercadopagoService = new MercadoPagoService(payerName, payerEmail)

    try {
        const initPoint = await mercadopagoService.buyBasicJS()
        return c.json({ init_point: initPoint })
    } catch(err) {
        console.error('Error at creating the mp preference', err)
        return c.text('Error at creating the mp preference', 500)
    }
})

brageJavascript.get('/confirm/basic', async (c) => {
    const paymentId = c.req.query('payment_id')
    if(!paymentId) return

    const mercadopagoService = new MercadoPagoService()

    try {
        const payment = await mercadopagoService.getPayment(Number(paymentId))
        if(!payment.isApproved || !payment.productId) return c.text('Payment not approved', 400)

        const bucketService = new BucketService()
        const productSignedUrl = bucketService.getFileUrl(payment.productId)

        return c.json({ message: 'Payment approved', url: productSignedUrl })
    } catch(err) {
        console.error('Error at confirming payment', err)
        return c.text('Error at confirming payment', 500)
    }
})