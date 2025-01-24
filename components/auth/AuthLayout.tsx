const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col gap-2 h-full">
			<h3 className="text-2xl font-bold border-b">Authentication</h3>
			{children}
		</div>
	);
};

export default AuthLayout;
