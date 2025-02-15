import { Next } from 'hono'
import { decode, sign, verify } from 'hono/jwt'

export const authMiddleware = async(c:any, next:Next)=>{
    const JWT_TOKEN = c.env.JWT_TOKEN
    try{
        const token: string = c.req.header("Authorization").split(" ")[1];
        if(token){
            const decoded = await verify(token, JWT_TOKEN)
            console
            if (!decoded || !decoded.id) {
                return c.json({ message: "Invalid or expired token" }, 401);
            }
            c.set("authorId", decoded.id)
            await next()
        }
        else{
            return c.json({message: "No token provided"}, 401)
        }
    }
    catch (error){
        return c.json({message: "Unauthroized"}, 401)
    }
}
