import { ADD_NEWS } from "../actions/news-actions";

export const newsReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NEWS: 
            return action.payload;
        default: 
            return state;
    }
}