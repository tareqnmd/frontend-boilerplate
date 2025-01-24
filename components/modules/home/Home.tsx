import { getEvenOnlyPosts, HOME_URL, PostType } from '@/lib/helper/home';
import { getHomeData } from '@/lib/helper/home/service';
import PostCard from './PostCard';

const Home = async () => {
	const posts = await getHomeData(HOME_URL.GET_POSTS);
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{getEvenOnlyPosts(posts).map((post: PostType) => (
				<PostCard
					key={post.id}
					post={post}
				/>
			))}
		</div>
	);
};

export default Home;
