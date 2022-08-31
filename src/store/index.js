import {legacy_createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './sagas';
import {rootReducer} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'persist-key',
  storage: AsyncStorage,
};

const sagaMiddleWare = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleWare),
);
export const persistor = persistStore(store);
export default store;

sagaMiddleWare.run(rootSaga);
