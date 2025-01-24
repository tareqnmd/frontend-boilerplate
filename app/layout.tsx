import Footer from '@/components/root/Footer';
import Nav from '@/components/root/Nav';
import '@/styles/global.scss';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
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
				className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_auto_1fr_auto] h-screen`}
			>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
