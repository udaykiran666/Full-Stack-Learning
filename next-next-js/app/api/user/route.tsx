import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    await client.user.create({
      data: {
        username: body.username,
        password: body.password  
      }
    });
    return NextResponse.json({ message: "You're logged in" });
  } catch (error) {
    // Handle error (e.g., unique constraint violation)
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function GET(){
  return NextResponse.json({ name: "Uday Kiran", email:  "udaykiranramaraju@gmail.com" });
}