import AuthLayout from '@/components/modules/auth/AuthLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
