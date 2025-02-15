import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { userSchema } from "../zod";
import {createuserSchema, updateuserSchema} from '@udaykiran666/medium-common'

export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
    }
  
}>();

userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const { success } = createuserSchema.safeParse(body);
    if (!success) {
      return c.json({ errors: "Inputs are not correct" }, 400);
    }
    const checkUser = await prisma.user.findUnique({
      where:{
        email: body.email
      }
    })
  
    if(checkUser){
      return c.json({message: "User already exists!"}, 403)
    }
    const user = await prisma.user.create({
      data: {
        name: body.email,
        email: body.email,
        password: body.password,
      }
    })
    return c.json({messgae: "User has created!"}, 201)
  })
  
userRouter.post('/signin', async (c) => {
    console.log("came here")
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const body = await c.req.json()
    const { success } = updateuserSchema.safeParse(body);
    if (!success) {
      return c.json({ errors: "Inputs are not correct" }, 400);
    }
    const user = await prisma.user.findUnique({
      where:{
        email: body.email,
        password: body.password
      }
    })
    if (!user){
      return c.json({message: "No user found with this email"}, 403)
    }
    const token = await sign({id: user.id}, "secret")
      return c.json({message: token}, 200)
  })