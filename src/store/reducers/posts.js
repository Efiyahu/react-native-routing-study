import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_FAILURE,
  GET_ALL_POSTS_SUCCESS,
} from '../constants';

const initialState = {
  posts: [],
  error: false,
  loading: false,
};

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_POSTS:
      return {
        ...state,
        laoding: true,
      };
    case GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        posts: action.payload,
      };
    case GET_ALL_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        posts: [],
      };
    default:
      return state;
  }
}
