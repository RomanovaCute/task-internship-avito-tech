import { combineReducers } from "redux";

import { newsReducer, itemsReducer, commentsReducer } from "./reducers/news-reducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    details: itemsReducer,
    comments: commentsReducer
})