import { PostsType } from '.';

export const getEvenOnlyPosts = (posts: PostsType) =>
	posts.filter((_, index) => index % 2 === 0);

export const showMinimumDescription = (description: string) =>
	description.split(' ').slice(0, 10).join(' ') + '...';
