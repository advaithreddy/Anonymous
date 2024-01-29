import * as z from "zod"

export const SignupValidation = z.object({
    name: z.string(),
    username: z.string(),
    email: z.string().email(),
    password: z.string()
        .min(8, {message: 'Password must be at least 8 characters.'})
        .refine(password => /[A-Z]/.test(password), { message: 'Password must contain at least 1 uppercase letter.' })
        .refine(password => /[a-z]/.test(password), { message: 'Password must contain at least 1 lowercase letter.' })
        .refine(password => /[!@#$%^&*(),.?":{}|<>]/.test(password), { message: 'Password must contain at least 1 special character.' })
        .refine(password => /\d/.test(password), { message: 'Password must contain at least 1 number.' }),
})

export const SigninValidation = z.object({
    email: z.string().email(),
    password: z.string()
})

export const PostValidation = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
})

export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
});