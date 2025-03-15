import { validateUser } from "@/middleware/validateuser";
import { NextResponse, NextRequest } from "next/server";
import client from "@/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";


const SECRET = process.env.JWT_SECRET!;


export async function POST(req:NextRequest){
    const validationError = await validateUser(req);
    if (validationError) return validationError;

    const { email, password } = await req.json();

    const user = await client.user.findUnique({ where: { email } });
    if (!user) {
        return new NextResponse(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return new NextResponse(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET, { expiresIn: "1h" });

    const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,  // 1 hour (3600 seconds)
        path: "/",
      });
      

    const response =  new NextResponse(JSON.stringify({ message: "Login successful", token }), { status: 200 });
    response.headers.set("Set-Cookie", cookie); 
    
    return response;    
}