import { PostType } from '@/lib/helper/home';
import { showMinimumDescription } from '@/lib/helper/home/helper';
import PostCardTitle from './PostCardTitle';

const PostCard = ({ post }: { post: PostType }) => {
	return (
		<div
			key={post.id}
			className="post-card bg-white shadow-md rounded-lg p-4 max-w-sm"
		>
			<PostCardTitle title={post.title} />
			<p className="post-body text-gray-600 mt-2">
				{showMinimumDescription(post.body)}
			</p>
		</div>
	);
};

export default PostCard;
