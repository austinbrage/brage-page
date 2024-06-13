import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { payments } from './routes/payments'
import { keyValues } from './routes/key.values'
import { emailContact } from './routes/email.contact'
import { brageJavascript } from './routes/brage.javascript'

const app = new Hono().basePath('/product')

app.use(
  '*',
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization'],
  })
)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/payment', payments)
app.route('/keyvalues', keyValues)
app.route('/contact', emailContact)
app.route('/javascript', brageJavascript)

export default app
