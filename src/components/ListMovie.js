import {
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  Box,
  IconButton,
  Button,
} from "@mui/material";
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPage /> : <FirstPage />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPage /> : <LastPage />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function ListMovie({ movies }) {
  //   console.log(movies.allMovies.movie.length, ">> Listmovie");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - movies.allMovies.movie.length)
      : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
        <TableRow>
          <TableCell style={{ fontWeight: "bold" }}>Title</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Popularity</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Release Date</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>Vote Average</TableCell>
          <TableCell style={{ fontWeight: "bold" }}>About</TableCell>
        </TableRow>
      </TableHead>
      {(rowsPerPage > 0
        ? movies.allMovies.movie.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
          )
        : movies.allMovies.movie
      ).map((movie, i) => {
        return (
          <TableBody key={i}>
            <TableRow>
              <TableCell component="th" scope="row">
                {movie.title}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {movie.popularity}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {movie.release_date}
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {movie.vote_average}
              </TableCell>
              <TableCell style={{ width: 40 }} align="left">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/movie/${movie.id}`}
                >
                  <Button variant="contained" size="small">
                    Detail
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        );
      })}
      {emptyRows > 0 && (
        <TableRow style={{ height: 53 * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 20, { label: "All", value: -1 }]}
            colSpan={3}
            count={movies.allMovies.movie.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
