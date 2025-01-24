import { PostType } from '@/lib/helper/home';
import { showMinimumDescription } from '@/lib/helper/home/helper';
import PostCardTitle from './PostCardTitle';

const PostCard = ({ post }: { post: PostType }) => {
	return (
		<div className="relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg">
			<div className="p-4">
				<PostCardTitle title={post.title} />
				<p className="text-slate-600 leading-normal font-light mt-4">
					{showMinimumDescription(post.body)}
				</p>
			</div>
		</div>
	);
};

export default PostCard;
