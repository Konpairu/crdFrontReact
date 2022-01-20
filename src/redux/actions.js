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

export const loadPosts = () => {
    return function(dispatch) {
        axios.get(`${process.env.REACT_APP_API}/posts`)
        .then(res =>{ 
                dispatch(getPosts(res.data))
                dispatch(filterPosts(res.data))

        })
        .catch(err => console.log(err) )
    }
}

export const deletePost = (id) => {
    return function(dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/posts/${id}`)
        .then(res =>{ 
                dispatch(postDeleted(res.data))
                dispatch(loadPosts(res.data))
                dispatch(filterPosts())
        })
        .catch(err => console.log(err) )
    }
}

export const createPost = (body) => {
    return function(dispatch) {
        axios.post(`${process.env.REACT_APP_API}/posts`, body)
        .then(res =>{ 
                dispatch(postCreated(res.data))
                dispatch(loadPosts(res.data))
                dispatch(filterPosts())
        })
        .catch(err => console.log(err) )
    }
}

export const setValueFilter = (name) => {
    return function(dispatch) {
                dispatch(settedValueFilter(name))
    }
}

export const filterPosts = (posts=[],name) => {
    return function(dispatch) {
                const filtered = name 
                ?posts.filter( a => a.name===name )
                :posts

                dispatch(filteredPosts(filtered))
    }
}