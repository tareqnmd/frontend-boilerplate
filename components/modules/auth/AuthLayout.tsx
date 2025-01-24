const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex flex-col gap-2 h-full">{children}</div>;
};

export default AuthLayout;
