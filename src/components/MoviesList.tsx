import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMovies } from "../model/database";
import { movieData } from "../model/interface";
import MovieItem from "./MovieItem";
import Slider from "react-slick";

interface Props {
  categoryTitle: string;
}

function MoviesList({ categoryTitle }: Props) {
  const movies = getMovies(categoryTitle);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
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
