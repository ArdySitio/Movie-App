import { combineReducers } from "redux";
import {
  movieReducer,
  selectedMovieReducer,
  genreReducer,
} from "./movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
  movie: selectedMovieReducer,
  genre: genreReducer,
});

export default reducers;
