import {combineReducers} from 'redux';
import postsReducer from './posts';
import favoritesReducer from './favorites';

export const rootReducer = combineReducers({
  postsReducer,
  favoritesReducer,
});
