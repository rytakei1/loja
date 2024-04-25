import { z } from "zod";

export const createUserSchema = z
  .object({
    firstName: z
      .string({ required_error: "firstName is required" })
      .min(1, "firstName is required"),
    lastName: z
      .string({ required_error: "lastName is required" })
      .min(1, "lastName is required"),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z
      .string({
        required_error: "Please confirm your password",
      })
      .min(1, "Please confirm your password"),
    customerId: z.number({ required_error: "customerId is required" }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });
