import Footer from '@/components/root/Footer';
import Nav from '@/components/root/Nav';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Frontend Boilerplate',
	description: 'Frontend Boilerplate',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.variable} antialiased grid grid-rows-[auto_auto_1fr_auto] h-screen`}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
