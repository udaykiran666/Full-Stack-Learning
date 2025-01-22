import {z} from "zod"

const signInput = z.object({
    username : z.string(),
    password : z.string()
})

export type SignupParams = z.infer<typeof signInput>