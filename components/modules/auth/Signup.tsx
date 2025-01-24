'use client';
import { registerFormItems } from '@/lib/helper/auth/form-items';
import { registerSchema } from '@/lib/helper/auth/schema';
import { signUp } from '@/lib/helper/auth/service';
import { RegisterPayloadSchemaType } from '@/lib/helper/auth/type';
import { Routes } from '@/lib/utils/routes/enum';
import { FormItemType } from '@/lib/utils/shared/type';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import AuthFormWrapper from './AuthFormWrapper';

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
			<form
				className="space-y-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				<h5 className="text-xl font-medium text-gray-900 dark:text-white">
					Sign up to our platform
				</h5>
				{registerFormItems.map((item: FormItemType) => (
					<div key={item.name}>
						<label
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							htmlFor={item.name}
						>
							{item.label}
						</label>
						<input
							{...register(item.name as keyof typeof register)}
							type={item.type}
							name={item.name}
							id={item.name}
							className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none ${
								errors[item.name as keyof typeof errors]
									? 'border-red-500'
									: 'border-gray-300'
							}`}
							placeholder={item.label}
						/>

						{errors[item.name as keyof typeof errors] && (
							<p className="text-red-500 text-xs italic">
								{errors[item.name as keyof typeof errors]?.message}
							</p>
						)}
					</div>
				))}
				<button
					type="submit"
					className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>
					Sign up to your account
				</button>
				<div className="text-sm font-medium text-gray-500 dark:text-gray-300 flex gap-1 justify-center">
					Already have an account?
					<Link
						href={Routes.SIGN_IN}
						className="text-blue-700 hover:underline dark:text-blue-500"
					>
						Login
					</Link>
				</div>
			</form>
		</AuthFormWrapper>
	);
};

export default Signup;
