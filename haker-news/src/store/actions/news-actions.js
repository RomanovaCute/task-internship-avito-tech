import { ADD_NEWS, SET_ITEM, ADD_COMMENTS } from "../constants/constants"

const addNews = (news) => ({
    type: ADD_NEWS,
    payload: news
})

const setItem = (item) => ({
    type: SET_ITEM,
    payload: item
})

const getComments = (comments) => ({
    type: ADD_COMMENTS,
    payload: comments
})

const url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`

export const loadComments = (id) => async (dispatch) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    const result = await response.json();
    console.log(result);

    if(result.kids){
        const comments = await parseComment(result.kids)
        console.log(comments);
        dispatch(getComments(comments))
    }
}

const parseComment = async (commentsIds) => {
    const response = await Promise.all(commentsIds.map(async (commentId) => {
        const result = await fetch(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json?print=pretty`);
        const resultComments = await result.json()
        return resultComments
    }))
    return response
}

// новости
export const loadNewsById = (id) => async (dispatch) => {
    const response = await getNewsItem(id);
    const setCountry = await response;
    dispatch(setItem(setCountry))
}

export const loadNews = async (url)  => {
    let response = await fetch(url)
    let result = await response.json()
    return result
}

// отдельная новость
export const getNewsItem = async (id) => {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    let result = await response.json()
    return result
}


export const get = () => async (dispatch) => {

    const response = await loadNews(url)
    const newsId = await response.slice(0, 100)
    let arr = await Promise.all(newsId.map(async (id) => {
        const resp = await getNewsItem(id)
        return resp;
    }))
    arr = arr.filter(items => items !== null);
    dispatch(addNews(arr))
}
