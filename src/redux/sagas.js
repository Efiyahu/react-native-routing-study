import {takeEvery} from 'redux-saga/effects';
import {GET_ALL_FAVORITES} from '../redux/actions';

function* handler() {
  yield takeEvery(GET_ALL_FAVORITES, getAllUserInfo);
}

function* getAllUserInfo(action) {
  try {
    // API call
  } catch (err) {
    // add error handling
  }
}

export default handler;
