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

export const moviesImageDummy = [
  {
    id: 1,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 2,
    image:
      "https://imdb-api.com/images/original/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 3,
    image:
      "https://imdb-api.com/images/original/MV5BMzVlMmY2NTctODgwOC00NDMzLWEzMWYtM2RiYmIyNTNhMTI0XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 4,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 5,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 6,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 7,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 8,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 9,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 10,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 11,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
  {
    id: 12,
    image:
      "https://imdb-api.com/images/original/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_Ratio0.6716_AL_.jpg",
  },
];
