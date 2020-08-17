import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

const rootReducer = combineReducers({
    postsPage: postsReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;