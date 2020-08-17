import { AnyAction } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import {FETCH_ALL_POSTS_SUCCESS} from "../actions/actionTypes";
import { Post } from "../../interfaces";

export interface State {
    posts: Array<Post>;
};

const initialState: State = { posts: [] }

function authReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        // HYDRATE required for updating state after pre rendering
        case HYDRATE:
            return { ...state, ...action.payload.BlogPage }
        case FETCH_ALL_POSTS_SUCCESS:
            return { ...state, posts: action.posts }
        default:
            return state
    }
}

export default authReducer