import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { MakeStore, createWrapper } from "next-redux-wrapper";
import rootReducer, { AppStateType } from "./reducers";
import rootSaga from "./sagas/root-saga";

export interface SagaStore extends Store {
    sagaTask: Task
};

export const makeStore: MakeStore<AppStateType> = () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga)
    return store
};

export const wrapper = createWrapper<AppStateType>(makeStore, { debug: true });