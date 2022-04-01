import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMovies } from "../store/actions/movieAction";
import { TableContainer, Paper, Container, Button } from "@mui/material";
import ListMovie from "./ListMovie";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const movies = useSelector((state) => state);
  const dispath = useDispatch();

  const fetchMovies = async () => {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=1`
      )
      .catch((err) => {
        console.log(err, ">> error");
      });
    dispath(setMovies(response.data.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // console.log("movies :", movies.allMovies);

  return (
    <TableContainer component={Paper}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <Link style={{ textDecoration: "none" }} to={`/movie/genre`}>
          <Button variant="contained">Choose your Genre</Button>
        </Link>
      </div>
      <ListMovie movies={movies} />
    </TableContainer>
  );
};

export default Dashboard;
