import React from "react";
import { moviesForm } from "../model/movies";
import MoviesList from "./MoviesList";
import CategoryTitle from "./CategoryTitle";
import styled from "styled-components";
import cn from "classnames";
interface Props {
  movies: moviesForm[];
}
function MoviesContainer({ movies }: Props) {
  return (
    <MoviesContainerBlock>
      {movies.map((movie) => (
        <>
          <CategoryTitle categoryTitle={movie.categoryTitle} />
          <MoviesList categoryTitle={movie.categoryTitle} />
        </>
      ))}
    </MoviesContainerBlock>
  );
}

export default MoviesContainer;

const MoviesContainerBlock = styled.div``;
