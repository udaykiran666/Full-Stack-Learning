import { getClient } from "./utils";

export async function deleteData(userId:number) {
    const client = await getClient();
    const deleteText = 'DELETE FROM todos WHERE user_id = $1';
    const deleteData = [userId];

    const response = await client.query(deleteText, deleteData);
    console.log('Todo deleted : ',response);
    
}

deleteData(2);