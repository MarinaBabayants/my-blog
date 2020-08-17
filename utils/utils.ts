import { Post } from "../interfaces/index";
const MIN_LINE_LENGTH = 10;

export const normalisePosts = (posts: Array<Post>) => posts.filter( post => post.id && post.body?.length > MIN_LINE_LENGTH  && post.title);