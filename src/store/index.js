import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {rootReducer} from './reducers';

const sagaMiddleWare = createSagaMiddleware();

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare),
);

sagaMiddleWare.run(rootSaga);
