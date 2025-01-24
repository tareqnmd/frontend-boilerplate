import { FormItemEnumType } from '@/lib/utils/shared/enum';

export const loginFormItems = [
	{
		name: 'email',
		label: 'Email',
		type: FormItemEnumType.TEXT,
	},
	{
		name: 'password',
		label: 'Password',
		type: FormItemEnumType.PASSWORD,
	},
];

export const registerFormItems = [
	...loginFormItems,
	{
		name: 'confirmPassword',
		label: 'Confirm Password',
		type: FormItemEnumType.PASSWORD,
	},
	{
		name: 'role',
		label: 'Role',
		type: FormItemEnumType.TEXT,
	},
	{
		name: 'phone',
		label: 'Phone',
		type: FormItemEnumType.TEXT,
	},
];
