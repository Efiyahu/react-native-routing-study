import {combineReducers} from 'redux';
import {reducer as favReducer} from './reducers';

const reducer = combineReducers({
  favorites: favReducer,
});

export default reducer;
