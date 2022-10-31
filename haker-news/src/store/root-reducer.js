import { combineReducers } from "redux";

import { newsReducer, itemsReducer, commentsReducer, childCommentsReducer } from "./reducers/news-reducer";

export const rootReducer = combineReducers({
    news: newsReducer,
    details: itemsReducer,
    comments: commentsReducer,
    children: childCommentsReducer
})