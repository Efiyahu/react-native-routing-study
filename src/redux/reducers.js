import {ADD_FAVORITE} from './actions';

const initialState = {
  favorites: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE: {
      return {
        favorites: [...state.favorites, action.payload],
      };
    }
    default:
      return state;
  }
};
