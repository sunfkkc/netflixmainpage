import { movieData } from "./interface";

export const getMovies = (categoryTitle: string): movieData[] => {
  return JSON.parse(localStorage.getItem(categoryTitle) || "");
};

export const top2030Movies = getMovies("Top250Movies").slice(20, 30);
