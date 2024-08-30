const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const {CreateToDo} = require("../backend/db/index");
const {create_todo_schema, get_todo_schema} = require("./zod-typs");
const { get } = require('../week-3/04-mongo-with-jwt-auth/routes/admin');
// Define your middlewares here

function middleware(req, res, next){
    // Add your middleware logic here
    next();
}

app.post("/todo", middleware, async (req, res)=>{
    console.log("req.body : ", req.body);
    const createPayload = create_todo_schema.safeParse(req.body);
    if (!createPayload.success) {
        return res.status(400).json(createPayload.error);
    }
    const {title, description} = createPayload.data;
    // Create a new todo with given title and description
    await CreateToDo.create({title, description, completed: false});
    res.status(201).json({msg:"To-Do created"});
});

app.get("/todos", middleware, async (req, res)=>{
    // Fetch all todos
    const todos = await CreateToDo.find({});
    
    res.status(200).json(todos);
})


app.put("/completed", middleware, async (req, res)=>{
    // Mark todo as completed
    const updatePayload = get_todo_schema.safeParse(req.body);
    if (!updatePayload.success) {
        return res.status(400).json(updatePayload.error);
    }
    const {id} = updatePayload.data;
    const todo = await CreateToDo.findById({_id:id});
    if (!todo) {
        return res.status(404).json({msg: "To-Do not found"});
    }
    await CreateToDo.updateOne({_id:id},{completed: true})
    res.status(200).json({msg: "To-Do Updated Successfully"});
})

app.listen(3000);