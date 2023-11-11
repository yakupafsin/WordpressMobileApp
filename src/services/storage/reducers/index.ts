import { combineReducers, Reducer } from "redux";

import postsReducer, { PostsState } from "./posts";

// Define the type for the combined state
export interface RootState {
  posts: PostsState;
  // Add other slices of state as needed
}

// Define the type for the combined reducer
export type CombinedReducer = Reducer<RootState>;

const rootReducer: CombinedReducer = combineReducers<RootState>({
  posts: postsReducer,
  // Add other slices of state as needed
});

export default rootReducer;
