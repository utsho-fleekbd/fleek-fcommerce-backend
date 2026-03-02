 import{z} from "zod";

export const signUpSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    photoUrl: z.string().url(),
})

export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})