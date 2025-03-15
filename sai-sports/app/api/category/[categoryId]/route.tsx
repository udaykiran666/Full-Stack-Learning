import { NextRequest, NextResponse } from "next/server";
import client from "@/db"
import {z} from "zod"
import { authMiddleware } from "@/middleware/authmiddleware";

const requestSchema = z.object({
    name: z.string().min(3).max(24).optional(),
    description: z.string().min(10).max(1000).optional() 
})


export async function GET(req: NextRequest, { params }: { params: { categoryId: string } }) {
    const user = await authMiddleware(req);

    if (user instanceof NextResponse) {
        return user;
    }
    const { categoryId } = params;
    const category = await client.category.findUnique({ where: { id: categoryId } });
    return new NextResponse(JSON.stringify(category), {status:200})
}

export async function PUT(req: NextRequest, { params }: { params: { categoryId: string } }){
    const user = await authMiddleware(req);

    if (user instanceof NextResponse) {
        return user;
    }

    if(!user.isAdmin) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized: Admin access required" }), { status: 403 });
    }

    const { categoryId } = params;
    const body = requestSchema.safeParse(await req.json())
    if (!body.success) {
        return new NextResponse(JSON.stringify({ error: "Invalid request data", details: body.error.message }), { status: 400 });
    }

    if (!body.data.name && !body.data.description) {
        return new NextResponse(JSON.stringify({ error: "At least one field (name or description) must be updated" }), { status: 400 });
    }

    const category = await client.category.findUnique({ where: { id: categoryId } });
    if (!category) {
        return new NextResponse(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }

    const updatedCategory = await client.category.update({
        where: { id: categoryId },
        data: body.data
    })

    return new NextResponse(JSON.stringify(updatedCategory), {status: 200})
}

export async function DELETE(req: NextRequest, { params }: { params: { categoryId: string } }){
    const user = await authMiddleware(req);

    if (user instanceof NextResponse) {
        return user;
    }

    if(!user.isAdmin) {
        return new NextResponse(JSON.stringify({ error: "Unauthorized: Admin access required" }), { status: 403 });
    }

    const { categoryId } = params;
    const category = await client.category.findUnique({ where: { id: categoryId } });

    if (!category) {
        return new NextResponse(JSON.stringify({ error: "Category not found" }), { status: 404 });
    }
    
    await client.category.delete({ where: { id: categoryId } });

    return new NextResponse(JSON.stringify({ message: "Category deleted successfully" }), { status: 204 })
}
  