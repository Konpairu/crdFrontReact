import  * as types from "./actionTypes";
import axios from 'axios';

const getPosts = (posts) => ({
    type: types.GET_POSTS,
    payload: posts
})
const postDeleted = (posts) => ({
    type: types.DELETE_POST,
    payload: posts
})
const postCreated = (posts) => ({
    type: types.CREATE_POST,
})
const filteredPosts = (filtered) => ({
    type: types.FILTER_POSTS,
    payload: filtered
})
const settedValueFilter = (name) => ({
    type:types.SET_NAME_FILTER,
    payload:name
})

export const loadPosts = (name="") => {
    return function(dispatch) {
        console.log("Getting data from the endpoint")
        axios.get(`${process.env.REACT_APP_API}/posts`)
        .then(res =>{ 
                dispatch(getPosts(res.data))
                dispatch(filterPosts(res.data,name))

        })
        .catch(err => console.log(err) )
    }
}

export const deletePost = (id,name="") => {
    return function(dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/posts/${id}`)
        .then(res =>{ 
                dispatch(postDeleted(res.data))
                dispatch(loadPosts(name))
                //dispatch(filterPosts(res.data,name))
        })
        .catch(err => console.log(err) )
    }
}

export const createPost = (body,name="") => {
    return function(dispatch) {
        axios.post(`${process.env.REACT_APP_API}/posts`, body)
        .then(res =>{ 
                dispatch(postCreated(res.data))
                dispatch(loadPosts(name))
                //dispatch(filterPosts(res.data,name))
        })
        .catch(err => console.log(err) )
    }
}

export const setValueFilter = (name) => {
    return function(dispatch) {
                dispatch(settedValueFilter(name))
    }
}

export const filterPosts = (posts=[],name="") => {
    return function(dispatch) {
                const filtered = name==="" 
                ?posts
                :posts.filter( a => a.name===name )

                dispatch(filteredPosts(filtered))
    }
}