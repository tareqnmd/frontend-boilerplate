import Link from 'next/link';
import AuthFormWrapper from './AuthFormWrapper';

const Signup = () => {
	return (
		<AuthFormWrapper>
			<form action="">
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Email
					</label>
					<input
						className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
						id="email"
						type="email"
						placeholder="Email"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Password
					</label>
					<input
						className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
						id="password"
						type="password"
						placeholder="Password"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Confirm Password
					</label>
					<input
						className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
						id="confirmPassword"
						type="password"
						placeholder="Confirm Password"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Role
					</label>
					<select
						className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
						id="role"
					>
						<option value="admin">Admin</option>
						<option value="user">User</option>
					</select>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-semibold mb-2">
						Phone
					</label>
					<input
						className="shadow appearance-none border-2 border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
						id="phone"
						type="tel"
						placeholder="Phone"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign Up
					</button>
					<Link
						className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
						href="/sign-in"
					>
						Sign In
					</Link>
				</div>
			</form>
		</AuthFormWrapper>
	);
};

export default Signup;
