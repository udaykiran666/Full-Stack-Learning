import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

async function main(){
    const useer = await prisma.user.update({
        where:{
            email:"udaykiranramaraju@gmail.com"
        },
        data:{
           posts:{
                updateMany:{
                    where:{title:"Hello World"},
                    data:{title:"updated title"}
                }

           }
        }
    })
    console.log('data : ',useer)
}

main();