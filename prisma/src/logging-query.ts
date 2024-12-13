import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient({log:['info', 'query', 'error']})

async function main(){
    const users = await prisma.user.findMany({
        where:{
            name:"Uday Kiran Ramaraju"
        }
    })
    console.log('users: ', users)
}
main();