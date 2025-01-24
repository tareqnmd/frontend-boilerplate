const AuthFormWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="grid place-items-center h-full">
			<form className="w-full max-w-[400px] bg-[#fafafa] shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
				{children}
			</form>
		</div>
	);
};

export default AuthFormWrapper;
