import Link from 'next/link';
import AuthFormWrapper from './AuthFormWrapper';

const Signin = () => {
	return (
		<AuthFormWrapper>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-semibold mb-2"
					htmlFor="email"
				>
					Email
				</label>
				<input
					className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
					id="email"
					type="email"
					placeholder="Email"
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-semibold mb-2"
					htmlFor="password"
				>
					Password
				</label>
				<input
					className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
					id="password"
					type="password"
					placeholder="Password"
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Sign In
				</button>
				<Link
					className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
					href="/sign-up"
				>
					Sign Up
				</Link>
			</div>
		</AuthFormWrapper>
	);
};

export default Signin;
