'use client';

import { copyText } from '@/lib/utils/common';
import { useCallback, useState } from 'react';

const PostCardTitle = ({ title }: { title: string }) => {
	const [isCopied, setIsCopied] = useState(false);

	const copy = useCallback(() => {
		copyText(title);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	}, [title]);

	return (
		<div className="post-title truncate flex justify-between gap-4">
			<h1 className="truncate text-lg font-bold text-gray-800">{title}</h1>
			<button
				onClick={copy}
				className="bg-gray-600 rounded-md text-white px-2 py-1"
				aria-label={isCopied ? 'Text copied' : 'Copy text'}
			>
				{isCopied ? 'Copied!' : 'Copy'}
			</button>
		</div>
	);
};

export default PostCardTitle;
