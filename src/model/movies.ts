import { getMovies } from "./database";

const REACT_APP_IMDB_API_KEY = process.env.REACT_APP_IMDB_API_KEY;
export interface moviesForm {
  id: number;
  categoryTitle: string;
  url: string;
}

export const moviesDummy1: moviesForm[] = [
  {
    id: 1,
    categoryTitle: "Top250Movies",
    url: `https://imdb-api.com/en/API/Top250Movies/${REACT_APP_IMDB_API_KEY}`,
  },
  {
    id: 2,
    categoryTitle: "MostPopularMovies",
    url: `https://imdb-api.com/en/API/MostPopularMovies/${REACT_APP_IMDB_API_KEY}`,
  },
  {
    id: 3,
    categoryTitle: "BoxOffice",
    url: `https://imdb-api.com/en/API/BoxOffice/${REACT_APP_IMDB_API_KEY}`,
  },
  {
    id: 4,
    categoryTitle: "Top250TVs",
    url: `https://imdb-api.com/en/API/Top250TVs/${REACT_APP_IMDB_API_KEY}`,
  },
  {
    id: 5,
    categoryTitle: "MostPopularTVs",
    url: `https://imdb-api.com/en/API/MostPopularTVs/${REACT_APP_IMDB_API_KEY}`,
  },
];

export const headMovies: moviesForm[] = [
  {
    id: 1,
    categoryTitle: "Top250Movies",
    url: `https://imdb-api.com/en/API/Top250Movies/${REACT_APP_IMDB_API_KEY}`,
  },
];
