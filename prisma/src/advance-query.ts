import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({log:['info','query']})

async function main(){
    const user = await prisma.user.findMany({
        where:{
            email:{
                endsWith: "@gmail.com"
            },
            posts:{
                //atleast one not post should be published
                some:{
                    published: false
                }
            }
        },
        include:{
            posts:true
        }
    })
    console.log('users : ', JSON.stringify(user))
}

main();