import { getClient }  from "./utils";

async function insertData(){
    const client = await getClient();
    const userText = `INSERT INTO users (username, password, name) VALUES ($1, $2, $3) RETURNING id`
    const insertUserData = ['usha@gmail.com', 'usharani', 'usharani ramaraju']
    
    const response = await client.query(userText, insertUserData)
    console.log('response!!',response)

    const ToDoText = `INSERT INTO todos (title, description, completed, user_id) VALUES ($1, $2, $3, $4)
                      RETURNING id`
    const insertToDoData = ['SHOP', 'go to shop in morning', false, 2]
    await client.query(ToDoText, insertToDoData)

    console.log('Entries Created!')
}

insertData();