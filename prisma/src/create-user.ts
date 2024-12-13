import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    await prisma.user.create({
        data:{
            email : "nag@gmail.com",
            name : "Nageswara Rao Ramaraju"
        }
    })
}

main();