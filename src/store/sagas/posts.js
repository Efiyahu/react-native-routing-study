import {put, takeLatest} from 'redux-saga/effects';
import {API} from '../../components/api/client';
import * as postsActions from '../constants';

function* getAllPosts() {
  try {
    const {data, status} = yield API.getAllPosts();
    if (status !== 200) throw new Error();
    console.log(data, status);
    yield put({
      type: postsActions.GET_ALL_POSTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    yield put({
      type: postsActions.GET_ALL_POSTS_FAILURE,
      payload: error,
    });
  }
}

function* postsSaga() {
  yield takeLatest(postsActions.GET_ALL_POSTS, getAllPosts);
}

export default postsSaga;
