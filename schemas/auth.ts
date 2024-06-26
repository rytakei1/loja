import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ required_error: "email is required" }).email(),
  password: z
    .string({ required_error: "password is required" })
    .min(1, "password is required"),
});

export const googleCredentialSchema = z.object({
  credential: z.string({ required_error: "credential is required" }),
});
