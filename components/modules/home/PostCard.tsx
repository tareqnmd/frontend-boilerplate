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
			<h1 className="post-title text-lg font-bold text-gray-800 truncate">
				{post.title}
			</h1>
			<p className="post-body text-gray-600 mt-2">
				{showMinimumDescription(post.body)}
			</p>
		</div>
	);
};

export default PostCard;
