import { NextRequest, NextResponse } from "next/server";
import { validateUser } from "@/middleware/validateuser";
import client from "@/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";



const SECRET = process.env.JWT_SECRET!;

export async function POST(req:NextRequest) {
    const validationError = await validateUser(req);
    if (validationError) {
        return validationError;
    }
    const { name, email, password } = await req.json();

    const user = await client.user.findUnique({where: {email:email}});
    if (user) {
        return new NextResponse(JSON.stringify({error: "User already exists"}), {status: 400});
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await client.user.create({
        data:{name:name, email:email, password:hashedPassword, authType: "credentials"}
    })

    const token = jwt.sign({userId: newUser.id}, SECRET, {expiresIn: '1h'});

    const cookie = serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,  // 1 hour (3600 seconds)
        path: "/",
      });

      
    const response = new NextResponse(JSON.stringify({ message: "User registered successfully", token }),{ status: 201 });
    response.headers.set("Set-Cookie", cookie); 
    
    return response;
}