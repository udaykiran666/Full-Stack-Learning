import { NextRequest, NextResponse } from "next/server";
import client from "@/db"
import jwt from "jsonwebtoken";


export  async function authMiddleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value || req.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {id:string}; 
    
    const user  = await client.user.findUnique({
      where: { id: decoded.id },
      select: { id: true, email: true, isAdmin: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 401 });
    }
    return user;
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
  }
}
