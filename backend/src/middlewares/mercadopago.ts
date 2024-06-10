import { env } from "hono/adapter"
import { MpPreferenceService } from "../services/mercadopago"
import { type Next, type Context } from "hono"

type MP_SECRETS = {
    FRONT_HOST_URL: string
    MERCADOPAGO_ACCESS_TOKEN: string
}

export type MercadopagoSecrets = {
    mpPreferenceService: MpPreferenceService
}

export class MercadopagoMiddlewares {

    static async initPreference(c: Context, next: Next) {
        const { 
            MERCADOPAGO_ACCESS_TOKEN: mpAccessToken,
            FRONT_HOST_URL: frontHost
        } = env<MP_SECRETS>(c)

        const body = await c.req.json()
        const { payerName, payerEmail } = body

        const mpPreferenceService = new MpPreferenceService(
            frontHost,
            mpAccessToken, 
            payerName, 
            payerEmail
        )

        c.set('mpPreferenceService', mpPreferenceService)
        
        await next()
    }

}