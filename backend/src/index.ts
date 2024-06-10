import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { payments } from './routes/payments'
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
app.route('/javascript', brageJavascript)

export default app
