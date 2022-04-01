import { Types } from "./types";

export const setMovies = (movies) => {
  return {
    type: Types.SET_MOVIES,
    payload: movies,
  };
};

export const selectedMovie = (movie) => {
  return {
    type: Types.SELECTED_MOVIE,
    payload: movie,
  };
};

export const setGenre = (genre) => {
  return {
    type: Types.SET_MOVIES,
    payload: genre,
  };
};
