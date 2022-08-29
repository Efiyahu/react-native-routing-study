import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import API from '../components/api/methods';
import {put, takeEvery} from 'redux-saga/effects';

function* getAllPostsAction() {
  const posts = yield API.getAllPosts();
  yield put({type: 'GET_ALL_POSTS', payload: posts});
}

function* rootSaga() {
  yield takeEvery('GET_ALL_POSTS', getAllPostsAction);
}

const initialState = {
  posts: [],
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS':
      return {
        posts: action.payload,
      };
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites:
          state.favorites.length > 0 &&
          state.favorites.find(favorite => favorite.id === action.payload.id)
            ? state.favorites
            : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const sagaMiddleWare = createSagaMiddleware();

export const store = legacy_createStore(
  reducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(rootSaga);
