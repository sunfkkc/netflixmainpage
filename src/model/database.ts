import { movieData } from "./interface";

export const getMovies = (categoryTitle: string): movieData[] => {
  return JSON.parse(localStorage.getItem(categoryTitle) || "");
};

//로컬 스토리지를 API 요청으로 가정
