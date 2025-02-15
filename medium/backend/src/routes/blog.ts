import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { authMiddleware } from '../middleware/auth'
import { blogSchema } from "../zod";
import {createblogSchema, updateblogSchema} from "@udaykiran666/medium-common"
import z, { any } from "zod"

export const blogRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string;
    },
	Variables: {
		authorId: string;
	}
}>();

blogRouter.get('/:id', async(c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	  }).$extends(withAccelerate())
	const id = c.req.param('id')
	const post = await prisma.post.findUnique({
		where:{
			id: id
		}
	})
	return c.json({message: post}, 200)
})

blogRouter.post('/', authMiddleware, async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	  }).$extends(withAccelerate())
	const body = await c.req.json();
	try {
		const result = createblogSchema.safeParse(body);
	
		if (!result.success) {
			console.log(result.error.format()); // Log validation errors
			return c.json({ errors: result.error.format() }, 400); // Return validation errors
		}
	
		// Extract valid data
		const { title, content } = result.data;
	
		const authorid = c.get("authorId");
		if (!authorid) {
			return c.json({ message: "Unauthorized" }, 401);
		}
	
		// Prisma logic
		const post = await prisma.post.create({
			data: {
				title,
				content,
				authorId: authorid,
				published: true,
			},
		});
	
		return c.json({ message: "Blog created successfully", post }, 201);
	
	} catch (error) {
		console.error("Unexpected Error:", error);
	
		return c.json({ error: "Something went wrong" }, 500);
	}
	
	// const authorid = c.get("authorId");
	// if(!authorid){
	// 	return c.json({message: "Unauthorized"}, 401)
	// }
	// const post = await prisma.post.create({
	// 	data:{
	// 		title: body.title,
	// 		content: body.content,
	// 		authorId: authorid,
	// 		published: true
	// 	}
	// })
	// return c.json({message: "Blog created successfully", post}, 201)
})

blogRouter.put('/:id', authMiddleware, async(c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env.DATABASE_URL,
	  }).$extends(withAccelerate())
	const body = await c.req.json();
	const { success } = updateblogSchema.safeParse(body);
	if (!success) {
        return c.json({ errors: "Inputs are not correct"}, 400);
    }
	const id = c.req.param('id');
	if(!id){
		return c.json({message: "Id required"}, 400)
	}
	try{
		const updatedPost = await prisma.post.update({
		where:{
			id:id
		},
		data:{
			title: body.title,
            content: body.content,
			published: body.published
		}
	})
	return c.json({message: "Update has Succesfull", updatedPost}, 201)
}
	catch(error){
		return c.json({message: "Update has Failed", error}, 400)
	}
})
