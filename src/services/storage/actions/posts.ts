import * as api from "@api/wordpressApi";
import { Dispatch } from "redux";

import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./actionTypes";

// Action creators
interface FetchPostsRequestAction {
  type: typeof FETCH_POSTS_REQUEST;
}

interface FetchPostsSuccessAction {
  type: typeof FETCH_POSTS_SUCCESS;
  payload: any[]; // Update the type of payload as needed
}

interface FetchPostsFailureAction {
  type: typeof FETCH_POSTS_FAILURE;
  payload: string;
}

export type PostsActionTypes =
  | FetchPostsRequestAction
  | FetchPostsSuccessAction
  | FetchPostsFailureAction;

// Async action creator
export const fetchPosts =
  () => async (dispatch: Dispatch<PostsActionTypes>) => {
    dispatch({ type: FETCH_POSTS_REQUEST });

    try {
      const posts = await api.get(
        "posts?_fields=author,id,excerpt,title,jetpack_featured_media_url",
      );
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: posts });
    } catch (error: any) {
      dispatch({ type: FETCH_POSTS_FAILURE, payload: error.message });
    }
  };
