import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setGenre } from "../store/actions/movieAction";

const Genre = () => {
  const movie = useSelector((state) => state);
  const genre = useSelector((state) => state.genre);
  const dispatch = useDispatch();
  //   console.log(genre, ">>movie");
  const fetchGenre = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`
      )
      .catch((err) => {
        console.log(err, ">> err fetchgenre");
      });
    dispatch(setGenre(response.data));
  };

  useEffect(() => {
    fetchGenre();
  }, []);

  return (
    <div>
      <h1>Genre Movie</h1>
    </div>
  );
};

export default Genre;
