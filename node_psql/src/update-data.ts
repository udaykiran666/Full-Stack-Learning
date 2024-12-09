import { getClient } from "./utils";

export async function updateUserData(userId:number){
    const client = await getClient();
    const updateText = `UPDATE todos SET completed = ($1) where user_id = ($2)`;
    const updateData = [true, userId]

    const response = await client.query(updateText, updateData)
    console.log('Todo Updated : ',response);
}

updateUserData(2);