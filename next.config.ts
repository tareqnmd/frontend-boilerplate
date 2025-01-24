import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'via.placeholder.com',
			},
		],
	},
};

export default nextConfig;
