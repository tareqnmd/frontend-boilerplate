import DashboardLayout from '@/components/root/DashboardLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <DashboardLayout>{children}</DashboardLayout>;
};

export default Layout;
