import { all, takeEvery, call, put } from "redux-saga/effects";
import { FETCH_ALL_POSTS } from "../actions/actionTypes";
import { PostsApi } from "../../api/api";
import { fetchAllPostsSuccess } from "../actions/actionCreators";
import { normalisePosts } from "../../utils/utils";

export const postsSaga = function* () {
    try {
       const { data } = yield call(PostsApi.getAllPosts);
       const normalizedPosts = normalisePosts(data);
       yield put(fetchAllPostsSuccess(normalizedPosts))
    } catch (error) {
        console.log(error)
    }
}

export function* saga() {
    yield all([
        takeEvery(FETCH_ALL_POSTS, postsSaga),
    ])
}
