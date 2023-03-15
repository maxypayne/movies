import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../interfaces/Movie";
import { getData, getImage, minsToHours } from "../lib/api";

const Movie = (params:any) => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie]: [MovieInterface, any] = useState({});
  const getMovieHandler = useCallback(async () => {
    setIsLoading(true);
    const data = await getData(`/movie/${id}`);
    setMovie(data);
    setIsLoading(false);
  }, [id]);
  useEffect((): any => {
    getMovieHandler();
  }, [getMovieHandler]);
  if (isLoading) return <p>Loading...</p>
  return <div className="page movie">
    <img src={getImage(movie.poster_path, 300)}/>
    <div className="movieInfos">
      <h1>{movie?.title}</h1>
      <p>{movie.release_date}</p>
      <p className="genres">{movie.genres?.map(({name}) => <span>{name}</span>)}</p>
      <p className="runtime">{minsToHours(movie.runtime as number)}</p>
      <div className="tagline">{movie.tagline}</div>
      <p>Overview</p>
      <p className="overview">{movie.overview}</p>
    </div>
  </div>
}

export default Movie;