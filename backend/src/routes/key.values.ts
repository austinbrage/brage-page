import { Hono } from "hono"
import { type KVNamespace } from "@cloudflare/workers-types"

type KV_NAMESPACE = {
    BUYERS: KVNamespace
}

export const keyValues = new Hono<{ Bindings: KV_NAMESPACE }>()

keyValues.get('/', async (c) => {
    try {
        const keys = await c.env.BUYERS.list()
        const descriptions = await Promise.all(
            keys.keys.map(async key => {
                const value = await c.env.BUYERS.get(key.name)
                return {
                    name: key.name,
                    value: value ? JSON.parse(value) : value
                }
            })
        )
        return c.json({ success: true, data: descriptions })
    } catch(err) {
        return c.json({ success: false, error: err })
    }
})