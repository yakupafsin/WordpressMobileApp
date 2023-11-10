// reducers/posts.ts
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/posts";

// State type
export interface PostsState {
  posts: any[]; // Update the type of posts as needed
  loading: boolean;
  error: string | null;
}

// Action type
export type PostsAction =
  | { type: typeof FETCH_POSTS_REQUEST }
  | { type: typeof FETCH_POSTS_SUCCESS; payload: any[] } // Update the type of payload as needed
  | { type: typeof FETCH_POSTS_FAILURE; payload: string };

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

const postsReducer = (
  state: PostsState = initialState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case FETCH_POSTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postsReducer;