import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function main(){
    const users = await prisma.post.findMany({
        where:{
            author:{
                name:"Uday Kiran Ramaraju"
            }
        },
        include:{
            author:{
                select:{
                    name:true,
                    email:true
                }
            }
        }
    })
    console.log('users: ', users)

    const users1 = await prisma.user.findUnique({
        where:{
            email:"udaykiranramaraju@gmail.com"
        },
        include:{
            posts:true
        }
    })
    console.log('users1: ', users1)
}

main();