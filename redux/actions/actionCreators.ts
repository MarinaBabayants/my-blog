import { FETCH_ALL_POSTS, FETCH_ALL_POSTS_SUCCESS } from "./actionTypes";
import { Post } from "../../interfaces";

export const fetchAllPosts = () => ({ type: FETCH_ALL_POSTS });
export const fetchAllPostsSuccess = ( posts: Array<Post> ) => ({ type: FETCH_ALL_POSTS_SUCCESS, posts });