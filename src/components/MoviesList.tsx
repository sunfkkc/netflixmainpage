import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../model/database";
import { movieData } from "../model/interface";
import MovieItem from "./MovieItem";
import Slider from "react-slick";

interface Props {
  url: string;
  categoryTitle: string;
}

function MoviesList({ url, categoryTitle }: Props) {
  const [movies, setMovies] = useState(getMovies(categoryTitle));
  const [numberOfItems, setNumberOfItems] = useState(6);
  /* useEffect(() => {
    const getWindowSize = () => {
      const windowWidth = window.innerWidth;
      const imgWidth = 200;
      if (windowWidth >= 5 * imgWidth) {
        setNumberOfItems(5);
      } else if (windowWidth >= 4 * imgWidth) {
        setNumberOfItems(4);
      } else if (windowWidth >= 3 * imgWidth) {
        setNumberOfItems(3);
      } else if (windowWidth >= 2 * imgWidth) {
        setNumberOfItems(2);
      } else {
        setNumberOfItems(1);
      }
    };

    window.addEventListener("resize", getWindowSize);
  }, []); */
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: numberOfItems,
    slidesToScroll: numberOfItems,
  };
  return (
    <>
      <Slider {...settings}>
        {movies.slice(0, 20).map((item: movieData) => (
          <MovieItem fullTitle={item.fullTitle} image={item.image} />
        ))}
      </Slider>
    </>
  );
}

export default MoviesList;
