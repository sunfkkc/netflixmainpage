import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import { getMovies } from "./model/database";
import { moviesDummy1, moviesForm } from "./model/movies";

function App() {
  return (
    <>
      <Header />
      <MoviesContainer movies={moviesDummy1} />
    </>
  );
}

export default App;
