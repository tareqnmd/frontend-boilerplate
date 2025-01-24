import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
	return (
		<div className="border-b border-gray-200">
			<div className="container flex justify-between items-center mx-auto py-2">
				<Image
					alt=""
					src="/logo.png"
					width={40}
					height={40}
				/>
				<div className="items-center flex gap-4">
					<Link href="/">Home</Link>
					<Link href="/blogs">Blogs</Link>
					<Link href="/sign-in">Sign In</Link>
				</div>
			</div>
		</div>
	);
};

export default Nav;
