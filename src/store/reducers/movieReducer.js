import { Types } from "../actions/types";

const initialState = {
  movie: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  // console.log(action, ">>> action");
  switch (type) {
    case Types.SET_MOVIES:
      return {
        ...state,
        movie: payload,
      };
    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, { type, payload }) => {
  // console.log(type, ">>> action");
  switch (type) {
    case Types.SELECTED_MOVIE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export const genreReducer = (state = {}, { type, payload }) => {
  // console.log(action, ">>> action");
  switch (type) {
    case Types.SET_GENRE:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
