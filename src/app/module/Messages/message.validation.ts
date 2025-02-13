import { z } from "zod";

const messageSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
    isDeleted: z.boolean().optional(),
  }),
});

export const messageValidation = {
  messageSchema,
};
