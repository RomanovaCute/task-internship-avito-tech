import { combineReducers } from "redux";

import { newsReducer } from "./reducers/news-reducer";

export const rootReducer = combineReducers({
    news: newsReducer,
})