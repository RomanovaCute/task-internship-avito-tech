import { ADD_NEWS, ADD_COMMENTS, SET_ITEM, ADD_CHILDREN_COMMENTS } from '../constants/constants';

// reducer for getting all the news
export const newsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NEWS: 
            return action.payload;
        default: 
            return state;
    }
}

// reducer for getting item of news
export const itemsReducer = (state = [], action) => {
    switch(action.type){
        case SET_ITEM: 
            return action.payload;
        default: 
            return state;
    }
}

// reducer for getting all the news item's comments
export const commentsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_COMMENTS: 
            return action.payload;
        default: 
            return state;
    }
}

// reducer for getting child comments
export const childCommentsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_CHILDREN_COMMENTS:
            const ids = state.map(item => item.id);
            const newComments = action.payload.filter(item => !ids.includes(item.id));

            if(newComments.length){
                return state.concat(newComments)
            }

            return action.payload;
        default: 
            return state;
    }
}