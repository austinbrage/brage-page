import { Hono } from "hono"
import { Resend } from "resend"
import { EnvironmentMiddlewares, type EnvironmentSecrets } from "../middlewares/environments"

export const emailContact = new Hono<{ Variables: Pick<EnvironmentSecrets, "resendApiKey"> }>()
emailContact.use(EnvironmentMiddlewares.resendSecrets)

emailContact.post('/', async (c) => {
    const body = await c.req.json()
    const { name, email, number, message } = body
    
    const resendApiKey = c.get('resendApiKey')    
    const resend = new Resend(resendApiKey)

    const htmlMessage = `
        <p>Hello, You have received a new contact message from bragetools.com:</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number:</strong> ${number}</p>
            <p><strong>Message:</strong> ${message}</p>
        <p>Thank you, The Contact Team</p>
    `

    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'agustinbrage19@gmail.com',
            subject: 'Bragetools contact section',
            html: htmlMessage
        })

        return c.json({ success: true })
    } catch(err) {
        console.error(err)
        return c.json({ success: false })
    }
})