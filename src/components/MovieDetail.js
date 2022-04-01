import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedMovie } from "../store/actions/movieAction";
import { Typography, Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const MovieDetail = () => {
  const movie = useSelector((state) => state.movie);
  const { movieId } = useParams();
  //   console.log(movieId, ">>> movieid");
  const dispatch = useDispatch();

  const fetchMovieDetail = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=2fccde01a371b106b09a241d6d1d5b49`
      )
      .catch((err) => {
        console.log(err, "err detail");
      });
    dispatch(selectedMovie(response.data));
  };

  useEffect(() => {
    if (movieId && movieId !== "") fetchMovieDetail();
  }, [movieId]);

  return (
    <Container style={{ height: "100vh", marginLeft: "30px" }}>
      <Typography
        variant="h4"
        style={{ marginBottom: "20px", marginTop: ".2em" }}
      >
        {movie.title}
      </Typography>
      <Typography style={{ marginBottom: "25px" }}>{movie.overview}</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
          Popularity: {movie.popularity}
        </Typography>
        <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
          Average: {movie.vote_average}
        </Typography>
      </div>
      <div style={{ alignItem: "center", marginTop: "20px" }}>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Button variant="contained">Back to Home</Button>
        </Link>
      </div>
    </Container>
  );
};

export default MovieDetail;
