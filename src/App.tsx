import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MoviesContainer from "./components/MoviesContainer";
import { getMovies } from "./model/database";
import { moviesDummy1, moviesForm } from "./model/movies";

function App() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
  };
  const [sliderSettings, setSliderSettings] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 0,
  });
  return (
    <>
      <Header />
      <MoviesContainer movies={moviesDummy1} />
    </>
  );
}

export default App;
