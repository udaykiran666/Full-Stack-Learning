import { getClient } from "../utils";

export async function getUserandToDojoin(userId:number){
    const client = await getClient();
    const query =   ` 
                        SELECT users.*, todos.title, todos.description, todos.completed
                        FROM users
                        LEFT JOIN todos ON users.id = todos.user_id
                        WHERE users.id = $1;
                    `
    const queryValue = [userId]
    const response = await client.query(query, queryValue)
    console.log('User and Todos : ',response.rows[0]);
}

export async function getAllUsersandToDojoin(){
    const client = await getClient();
    const query =   ` 
                        SELECT users.*, todos.title, todos.description, todos.completed
                        FROM todos
                        RIGHT JOIN users ON users.id = todos.user_id;
                    `
    const response = await client.query(query)
    console.log('All Users and Todos : ',response.rows);

}

export async function getAllUsersandToDojoinInner(){
    const client = await getClient();
    const query =   ` 
                        SELECT users.*, todos.title, todos.description, todos.completed
                        FROM users
                        INNER JOIN todos ON users.id = todos.user_id;
                    `
    const response = await client.query(query)
    console.log('All Users and Todos Inner Join : ',response.rows);
}

export async function getAllUsersandToDojoinFullOuter(){
    const client = await getClient();
    const query =   ` 
                        SELECT users.*, todos.title, todos.description, todos.completed
                        FROM users
                        FULL OUTER JOIN todos ON users.id = todos.user_id;
                    `
    const response = await client.query(query)
    console.log('All Users and Todos Full Outer Join : ',response.rows);
}

getUserandToDojoin(1);
getAllUsersandToDojoin();
getAllUsersandToDojoinInner();
getAllUsersandToDojoinFullOuter();
