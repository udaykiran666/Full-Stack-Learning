import { getClient } from "./utils";

async function createTable(){
    const client = await getClient();
    const createUserTablequery = (`
        CREATE TABLE  users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255)  NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255) NOT NULL
        );
    `);

    await client.query(createUserTablequery);

    const createToDoTablequery = (`
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                completed BOOLEAN DEFAULT FALSE,
                user_id INTEGER REFERENCES users(id)
            )
    `)

    await client.query(createToDoTablequery);

    console.log("Tables created successfully!");
}

createTable();