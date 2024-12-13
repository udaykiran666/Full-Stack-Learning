import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

async function main(){
    await prisma.post.create({
        data:{
            title : "Hello World",
            content : "This is my first blog post",
            published : false,
            author:{
                connect:{
                    email: "nag@gmail.com"
                }
            }
        }
    })
}

main();