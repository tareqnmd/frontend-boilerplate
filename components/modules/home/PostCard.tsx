import { showMinimumDescription } from '@/lib/helper/home/helper';

const PostCard = ({
	post,
}: {
	post: { id: string; body: string; title: string };
}) => {
	return (
		<div
			key={post.id}
			className="post-card bg-white shadow-md rounded-lg p-4 max-w-sm"
		>
			<div className="post-title truncate flex justify-between gap-4">
				<h1 className="truncate text-lg font-bold text-gray-800">
					{post.title}
				</h1>
				<button className="bg-gray-600 rounded-md text-white px-2 py-1">
					Copy
				</button>
			</div>
			<p className="post-body text-gray-600 mt-2">
				{showMinimumDescription(post.body)}
			</p>
		</div>
	);
};

export default PostCard;
