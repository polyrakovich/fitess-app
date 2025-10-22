import { z } from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(1, "Name is required")
		.regex(/[A-Z][a-z]{1,40}/, "Invalid name format")
		.max(100),
	email: z.email("Invalid email address"),
	message: z.string(),
});

export type ContactFormType = z.infer<typeof contactSchema>;
