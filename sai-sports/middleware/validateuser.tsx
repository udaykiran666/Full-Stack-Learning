import { NextRequest, NextResponse } from "next/server";

export async function validateUser(req:NextRequest){
    const {name, email, password} = await req.json()
    if(!email || !password){
        return new NextResponse(JSON.stringify({error: "Email and Password are required"}))
    }

    if (password.length < 6){
        return new NextResponse(JSON.stringify({error: "Password must be at least 6 characters long"}))
    }

    return null;
}