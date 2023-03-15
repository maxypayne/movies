import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../interfaces/Movie";
import { getData } from "../lib/api";

const Movies = (params:any) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie]: [MovieInterface, any] = useState({});
  const getMovieHandler = useCallback(async () => {
    setIsLoading(true);
    const data = await getData(`/movie/popular`);
    setMovie(data);
    setIsLoading(false);
  }, [id]);
  useEffect((): any => {
    getMovieHandler();
  }, [getMovieHandler]);
  if (isLoading) return <p>Loading...</p>
  return <div className="page movies">
   movies
  </div>
}

export default Movies;