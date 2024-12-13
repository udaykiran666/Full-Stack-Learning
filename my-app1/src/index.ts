import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c:any, next:any){
  const token = c.req.header("Authorization");
  if(!token){
    return c.json({message: "Unauthorized"})
  }
  return next()
}
app.get('/', authMiddleware, async(c) => {
  const body = await c.req.json();
  console.log(body)
  console.log(c.req.header("Authorization"))
  console.log(c.req.query("param"))
  return c.text('Hello Hono!')
})

app.post('/user', (c) => {
  return c.text('Hello Hono!')
})

export default app
