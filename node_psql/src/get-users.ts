import { getClient } from "./utils";

export async function getUserData(userId: number){
    const client = await getClient();
    const text = 'SELECT * FROM users WHERE id = $1'
    const values = [userId]
    
    const response = await client.query(text, values);
    console.log('User : ',response.rows[0]);
    
}

export async function getAllUsersData(){
    const client = await getClient();
    const text = 'SELECT * FROM users'
    
    const response = await client.query(text);
    console.log('All Users : ',response.rows);
}

export async function getUserToDos(userId:number){
    const client = await getClient();
    const text = 'SELECT * FROM todos WHERE user_id = $1'
    const values = [userId]
    
    const response = await client.query(text, values);
    console.log('User Todos : ',response.rows);
}
getUserData(1);
getAllUsersData();
getUserToDos(2);

