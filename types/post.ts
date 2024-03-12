export type IPost = {
	user_id: number;
	id: number;
	user_name: string;
	user_image: string;
	images?: PostImage[];
	comments?: PostComment[];
	description: string;
	created_at: string;
	total_of_likes: number;
};

type PostImage = {
	src: string;
};

type PostComment = {
	user_name: string;
	description: string;
};
