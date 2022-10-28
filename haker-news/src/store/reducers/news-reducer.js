import { ADD_NEWS, ADD_COMMENTS, SET_ITEM } from "../actions/news-actions";

export const newsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NEWS: 
            return action.payload;
        default: 
            return state;
    }
}

export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case SET_ITEM: 
            return action.payload;
        default: 
            return state;
    }
}

export const commentsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_COMMENTS: 
            return action.payload;
        default: 
            return state;
    }
}