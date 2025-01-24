'use client';

import { copyText } from '@/lib/utils/common';

const PostCardTitle = ({ title }: { title: string }) => {
	return (
		<div className="post-title truncate flex justify-between gap-4">
			<h1 className="truncate text-lg font-bold text-gray-800">{title}</h1>
			<button
				onClick={() => copyText(title)}
				className="bg-gray-600 rounded-md text-white px-2 py-1"
			>
				Copy
			</button>
		</div>
	);
};

export default PostCardTitle;
