import { PrismaClient }  from "@prisma/client";

const prisma = new PrismaClient();

// async function insertUser(username: string, password: string, email: string, firstName: string, lastName: string){
//     const response  = await prisma.user.create({
//         data:{
//             username,
//             password,
//             email,
//             firstName,
//             lastName
//         }
//     });
//     console.log(response);
// }

// insertUser('test11', 'test', 'test11', 'test', 'test')

async function getPost(userId: number){
    const response = await prisma.post.findMany({
        where:{
            userId:userId
        }
    });
    console.log(response);
}

getPost(1)