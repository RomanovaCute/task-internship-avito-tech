import { ADD_NEWS, ADD_COMMENTS, SET_ITEM, ADD_CHILDREN_COMMENTS } from '../constants/constants';

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

export const childCommentsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_CHILDREN_COMMENTS: 
            return action.payload;
        default: 
            return state;
    }
}