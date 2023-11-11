import { fetchPosts } from "@storage/actions/posts";
import { RootState } from "@storage/reducers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

// Define the type for the custom dispatch function
type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

// Custom hook for managing posts state and actions
export const usePosts = () => {
  const dispatch = useDispatch<ThunkAppDispatch>();
  const postsState = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    // Fetch posts when the component mounts (you can adjust this based on your needs)
    dispatch(fetchPosts());
  }, [dispatch]);

  // Return relevant data and actions
  return {
    posts: postsState.posts,
    loading: postsState.loading,
    error: postsState.error,
    refetchPosts: () => dispatch(fetchPosts()),
  };
};
