export interface PostType {
  id: number;
  title: {
    rendered: string;
  };
  jetpack_featured_media_url: string; // Replace with the actual field in your WordPress setup
  excerpt: {
    rendered: string;
  };
}

export interface PostsType {
  data: PostType[];
}

export interface PostsState {
  posts: PostsType[]; // Update the type of posts as needed
  loading: boolean;
  error: string | null;
}
