import GlobalSearch from '@/components/root/GlobalSearch';

const Template = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<GlobalSearch />
			<div className="container mx-auto">{children}</div>
		</>
	);
};

export default Template;
