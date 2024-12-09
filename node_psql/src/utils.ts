import {Client} from 'pg'
//'newpassword'; psql password
// \c {db-name} -> connect to specific database.
// \dt -> show all tables under specific database
/* below is how we'll recive data when any data is inserted into table
response!! Result {
  command: 'INSERT',
  rowCount: 1,
  oid: 0,
  rows: [ { id: 2 } ],
  fields: [
    Field {
      name: 'id',
      tableID: 24605,
      columnID: 1,
      dataTypeID: 23,
      dataTypeSize: 4,
      dataTypeModifier: -1,
      format: 'text'
    }
  ],
  _parsers: [ [Function: parseInteger] ],
  _types: TypeOverrides {
    _types: {
      getTypeParser: [Function: getTypeParser],
      setTypeParser: [Function: setTypeParser],
      arrayParser: [Object],
      builtins: [Object]
    },
    text: {},
    binary: {}
  },
  RowCtor: null,
  rowAsArray: false,
  _prebuiltEmptyResultObject: { id: null }
}
*/ 

/*
tables based on their position in the query:

LEFT JOIN: The table mentioned first (before the LEFT JOIN) is the left table, and the table after the LEFT JOIN is the right table.

Example:

sql
Copy code
SELECT users.*, todos.title
FROM users
LEFT JOIN todos ON users.id = todos.user_id;
Left Table: users (because it comes before LEFT JOIN)
Right Table: todos (because it comes after LEFT JOIN)
This means all rows from users will be returned, and any matching data from todos will be included. If no match is found in todos, NULL values will be returned for todos columns.

RIGHT JOIN: The table mentioned first (before the RIGHT JOIN) is the left table, and the table after the RIGHT JOIN is the right table.

Example:

sql
Copy code
SELECT users.*, todos.title
FROM users
RIGHT JOIN todos ON users.id = todos.user_id;
Left Table: users (because it comes before RIGHT JOIN)
Right Table: todos (because it comes after RIGHT JOIN)
This means all rows from todos will be returned, and any matching data from users will be included. If no match is found in users, NULL values will be returned for users columns.


*/ 

export async function getClient(){
    const client = new Client({
        host: "localhost",
        port: 5432,
        database: "new_todo_db",
        user: "postgres",
        password: "newpassword"
    })
    await client.connect();
    return client;
}