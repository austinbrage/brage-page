import { Hono } from 'hono'
import { brageJavascript } from './routes/brage.javascript'

const app = new Hono().basePath('/product')

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.route('/javascript', brageJavascript)

export default app
