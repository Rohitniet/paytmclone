import{z} from "zod"

export const user=z.object({

    username:z.string().min(3).max(15),
    email:z.string().email(),
    password:z.string().min(5)
})