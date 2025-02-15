import z from "zod"

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export const blogSchema = z.object({
    title: z.string().min(10).optional(),
    content: z.string().min(100).optional(),
    published: z.boolean().optional(),
})

export type userSchema = z.infer<typeof userSchema>;
export type blogSchema = z.infer<typeof blogSchema>;