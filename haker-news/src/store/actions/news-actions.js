export const ADD_NEWS = 'ADD_NEWS';


const addNews = (news) => ({
    type: ADD_NEWS,
    payload: news
})

let url = `https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`


export const loadNews = async (url)  => {
    let response = await fetch(url)
    let result = await response.json()
    return result
}

export const getNewsItem = async (id) => {
    let response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    let result = await response.json()
    return result
}




export const get = () => async (dispatch) => {
    let arr = []

    loadNews(url)
    .then(resp => 
        resp.forEach(id => 
            getNewsItem(id).then(resp => arr.push(resp))
           
        )
    )
    console.log(arr)
    dispatch(addNews(arr))
}

































// export const getItemNews = () => (dispatch) => {
//     fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
// }

// export const get = () => {
//     let arr = []

//     loadNews(url).then(resp => {
//         resp.map(id => arr.push(getNewsItem(id)))
//         console.log(arr)
//     })
    
// }

