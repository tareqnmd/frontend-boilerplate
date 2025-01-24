import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
	return <div className="py-4">{children}</div>;
};

export default DashboardLayout;
