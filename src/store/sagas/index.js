import {all, fork} from 'redux-saga/effects';
import postsSaga from './posts';

export default function* () {
  yield all([fork(postsSaga)]);
}
