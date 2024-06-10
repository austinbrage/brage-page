import { Hono } from "hono"
import { MercadopagoMiddlewares, type MercadopagoSecrets } from "../middlewares/mercadopago"

export const brageJavascript = new Hono<{ Variables: MercadopagoSecrets }>()
brageJavascript.use(MercadopagoMiddlewares.initPreference)

brageJavascript.post('/basic', async (c) => {
    const mpPreferenceService = c.get('mpPreferenceService')

    try {
        const response = await mpPreferenceService.buyBasicJS()
        return c.json({ success: true, url: response })
    } catch(err) {
        console.error('Error at creating the mp preference', err)
        return c.text('Error at creating the mp preference', 500)
    }
})

brageJavascript.post('/sql', async (c) => {
    const mpPreferenceService = c.get('mpPreferenceService')

    try {
        const response = await mpPreferenceService.buySqlSaferJS()
        return c.json({ success: true, url: response })
    } catch(err) {
        console.error('Error at creating the mp preference', err)
        return c.text('Error at creating the mp preference', 500)
    }
})

brageJavascript.post('/db', async (c) => {
    const mpPreferenceService = c.get('mpPreferenceService')

    try {
        const response = await mpPreferenceService.buyDbGenaratorJS()
        return c.json({ success: true, url: response })
    } catch(err) {
        console.error('Error at creating the mp preference', err)
        return c.text('Error at creating the mp preference', 500)
    }
})

brageJavascript.post('/full', async (c) => {
    const mpPreferenceService = c.get('mpPreferenceService')

    try {
        const response = await mpPreferenceService.buyFullGenaratorJS()
        return c.json({ success: true, url: response })
    } catch(err) {
        console.error('Error at creating the mp preference', err)
        return c.text('Error at creating the mp preference', 500)
    }
})