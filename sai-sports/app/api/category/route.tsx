import { NextRequest, NextResponse } from "next/server";
import client from "@/db"
import {z} from "zod"
import { authMiddleware } from "@/middleware/authmiddleware";

const requestSchema = z.object({
    name: z.string().min(3).max(24),
    description: z.string().min(10).max(1000) 
})

export async function POST(req: NextRequest){
    const user = await authMiddleware(req);

    if (user instanceof NextResponse) {
        return user;
    }

    if(!user.isAdmin) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized: Admin access required" }), { status: 403 });
    }

    const body = requestSchema.safeParse(await req.json())
    if (!body.success) {
        return new NextResponse(JSON.stringify({ error: "Invalid request data", details: body.error.message }), { status: 400 });
    }

    const {name, description} = body.data;

    const newCategory = await client.category.create({
        data:{name:name, description:description}
    })
    
    return new NextResponse(JSON.stringify(newCategory), {status: 201})
}

export async function GET(req: NextRequest){
    const user = await authMiddleware(req);

    if (user instanceof NextResponse) {
        return user;
    }
    const categories = await client.category.findMany()

    return new NextResponse(JSON.stringify(categories), {status: 200})
}

