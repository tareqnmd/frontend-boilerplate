import * as z from 'zod';

const schemaMessage = {
	password_match: 'Passwords do not match',
	password_required: 'Password is required',
	confirm_password_required: 'Confirm Password is required',
	confirm_password_match: 'Passwords do not match',
	email_required: 'Email is required',
	email_invalid: 'Invalid email address',
	role_required: 'Role is required',
	phone_required: 'Phone number is required',
	phone_invalid: 'Phone number must be 11 digits',
};

const emailSchema = z
	.string()
	.email(schemaMessage.email_invalid)
	.nonempty(schemaMessage.email_required);
const passwordSchema = z
	.string()
	.min(6, schemaMessage.password_required)
	.nonempty(schemaMessage.password_required);
const confirmPasswordSchema = z
	.string()
	.min(6, schemaMessage.confirm_password_required)
	.nonempty(schemaMessage.confirm_password_required);
const roleSchema = z.string().min(1, schemaMessage.role_required);
const phoneSchema = z.string().length(11, schemaMessage.phone_invalid);

export const loginSchema = z.object({
	email: emailSchema,
	password: passwordSchema,
});

export const registerSchema = z
	.object({
		email: emailSchema,
		password: passwordSchema,
		confirmPassword: confirmPasswordSchema,
		role: roleSchema,
		phone: phoneSchema,
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: schemaMessage.confirm_password_match,
	});
