const REACT_APP_IMDB_API_KEY = process.env.REACT_APP_IMDB_API_KEY;

export interface moviesForm {
  id: number;
  categoryTitle: string;
}

export const moviesDummy1: moviesForm[] = [
  {
    id: 1,
    categoryTitle: "Top250Movies", //API를 요청하는 URL
  },
  {
    id: 2,
    categoryTitle: "MostPopularMovies",
  },
  {
    id: 3,
    categoryTitle: "BoxOffice",
  },
  {
    id: 4,
    categoryTitle: "Top250TVs",
  },
  {
    id: 5,
    categoryTitle: "MostPopularTVs",
  },
];

export const headMovies: moviesForm[] = [
  {
    id: 1,
    categoryTitle: "Top250Movies",
  },
];
