import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Genre from "./components/Genre";
import MovieDetail from "./components/MovieDetail";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/genre" element={<Genre />} />
          <Route>404 Not Found</Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
