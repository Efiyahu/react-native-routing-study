import * as favActions from '../constants';

const initialState = {
  favorites: [],
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case favActions.ADD_FAVORITE:
      return {
        ...state,
        favorites:
          state.favorites?.length > 0 &&
          state.favorites?.find(favorite => favorite.id === action.payload.id)
            ? state.favorites
            : [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};
export default favoritesReducer;
