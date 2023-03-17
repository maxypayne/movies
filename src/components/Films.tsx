import { useCallback, useEffect, useState } from "react";
import { MovieInterface } from "../interfaces/Movie";
import { getData } from "../lib/api";
import MovieCard from "./common/MovieCard";

const Films = () => {
  const [films, setFilms]: [MovieInterface[], any] = useState([]);
  const getMovieHandler = useCallback(async () => {
    const data: any = await getData(`/movie/top_rated`);
    console.log(data);
    setFilms(data.results);
  }, []);
  useEffect((): any => {
    getMovieHandler();
  }, [getMovieHandler]);
  return <div className="page movies">
    <div className="seriesContainer">
      {!!films.length && films.map((movie, key) => <MovieCard key={'card' + key} movie={movie}/>)}
    </div>
  </div>
}

export default Films;