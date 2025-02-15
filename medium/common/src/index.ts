import z from "zod"

export const createuserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().optional(),
});

export const updateuserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});


export const createblogSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const updateblogSchema = z.object({
  title: z.string().min(10).optional(),
  content: z.string().min(10).optional(),
  id: z.string(),
})


export type CreateUserSchema = z.infer<typeof createuserSchema>;
export type UpdateUserSchema = z.infer<typeof updateuserSchema>;
export type BlogSchema = z.infer<typeof createblogSchema>;
export type UpdateBlogSchema = z.infer<typeof updateblogSchema>;
