import * as types from './actionTypes';

const initialState = {
    posts: [],
    filteredPosts: [],
    filterValue: "",
    loading: false,
};

const postsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case types.DELETE_POST:
            return {
                ...state,
                loading: false
            }
        case types.CREATE_POST:
            return {
                ...state,
                loading: false
            }
        case types.FILTER_POSTS:
            return {
                ...state,
                filteredPosts: action.payload,
                loading: false
            }
        case types.SET_NAME_FILTER:
            return {
                ...state,
                filterValue: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default postsReducers;