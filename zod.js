const zod = require("zod");

function validate(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const result = schema.safeParse(obj);
    console.log(result);
    console.log(result.response)
}

const obj = {
    email: "uday@gmail.com",
    password: "pass123"
}

validate(obj)