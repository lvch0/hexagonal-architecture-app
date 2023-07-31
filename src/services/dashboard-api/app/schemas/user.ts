import { z } from "zod";
import { PermissionsSchema } from ".";

export const RegisterSchema = z.object({
    email: z.string().email("Invalid email"),
    name: z.string(),
    password: z.string(),
});

export const AuthenticatedUserSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string(),
    token: z.string(),
    refreshToken: z.string(),
    persmissions: PermissionsSchema,
});

export type AuthenticatedUser = z.infer<typeof AuthenticatedUserSchema>;

export interface User extends Pick<AuthenticatedUser, "email" | "name"> {
    password: string;
}
