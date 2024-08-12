const zod = require("zod");

const create_todo_schema = zod.object({
    title: zod.string(),
    description: zod.string()
})

const get_todo_schema = zod.object({
    id: zod.string()
})

module.exports = {
    create_todo_schema,
    get_todo_schema
}

