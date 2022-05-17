import { movieData } from "./interface";

export const getMovies = (categoryTitle: string): movieData[] => {
  return JSON.parse(localStorage.getItem(categoryTitle) || "");
};
