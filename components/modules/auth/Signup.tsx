'use client';
import { registerFormItems } from '@/lib/helper/auth/form-items';
import { registerSchema } from '@/lib/helper/auth/schema';
import { RegisterPayloadSchemaType } from '@/lib/helper/auth/type';
import { FormItemType } from '@/lib/utils/shared/type';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import AuthFormWrapper from './AuthFormWrapper';
import { signUp } from '@/lib/helper/auth/service';

const Signup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
			role: '',
			phone: '',
		},
	});

	const onSubmit = async (data: RegisterPayloadSchemaType) => {
		console.log(data);
		try {
			const response = await signUp(data);
			console.log(response);
		} catch (error) {
			console.error('Registration failed:', error);
		}
	};

	return (
		<AuthFormWrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col gap-4">
					{registerFormItems.map((item: FormItemType) => (
						<div key={item.name}>
							<label
								className="block text-gray-700 text-sm font-semibold mb-2"
								htmlFor={item.name}
							>
								{item.label}
							</label>
							<input
								{...register(item.name as keyof typeof register)}
								className={`shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 ${
									errors[item.name as keyof typeof errors]
										? 'border-red-500'
										: 'border-gray-300'
								}`}
								id={item.name}
								type={item.type}
								placeholder={item.label}
							/>
							{errors[item.name as keyof typeof errors] && (
								<p className="text-red-500 text-xs italic">
									{errors[item.name as keyof typeof errors]?.message}
								</p>
							)}
						</div>
					))}
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit"
						>
							Sign Up
						</button>
						<Link
							className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
							href="/sign-up"
						>
							Sign Up
						</Link>
					</div>
				</div>
			</form>
		</AuthFormWrapper>
	);
};

export default Signup;
