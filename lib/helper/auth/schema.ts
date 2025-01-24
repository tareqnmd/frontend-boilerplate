import * as z from 'zod';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(8);
const roleSchema = z.string().min(1);
const phoneSchema = z.string().length(11);

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export const registerSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
	role: roleSchema,
	phone: phoneSchema,
});
