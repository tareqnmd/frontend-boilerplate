import * as z from 'zod';
import { loginSchema } from './schema';

import { registerSchema } from './schema';

export type LoginPayloadType = {
	email: string;
	password: string;
};

export type RegisterPayloadType = {
	email: string;
	password: string;
	role: string;
	phone: string;
};

export type LoginPayloadSchemaType = z.infer<typeof loginSchema>;
export type RegisterPayloadSchemaType = z.infer<typeof registerSchema>;
