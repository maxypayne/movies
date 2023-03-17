import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../interfaces/Movie";
import { getImage, getData, minsToHours } from "../lib/api";
import Review from "./common/Review";

const Film = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [movie, setMovie]: [MovieInterface, any] = useState({});
  const getMovieHandler = useCallback(async () => {
    setIsLoading(true);
    const data = await getData(`/movie/${id}`, '&append_to_response=credits,reviews');
    console.log({data});
    if (data) {
      setMovie(data);
    } else {
      setError('Aucun film trouvé')
    }
    setIsLoading(false);
  }, [id]);
  useEffect((): any => {
    getMovieHandler();
  }, [getMovieHandler]);
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error}</p>;
  return (
    <div className="movie">
    <div className="movieInfosWrapper" style={{backgroundImage:`url(${getImage(movie.poster_path, 'big')})`}}>
      <div className="movieInfosBack">
        <div className="movieInfosContainer">
          <img className="image" src={getImage(movie.poster_path, 'poster')}/>
          <div className="movieInfos">
            <h1 className="title">{movie?.title}</h1>
            <p className="date">{movie.release_date}</p>
            <p className="genres">{movie.genres?.map(({name}) => <span>{name}</span>)}</p>
            <p className="runtime">{minsToHours(movie.runtime as number)}</p>
            <div className="tagline">{movie.tagline}</div>
            <h2>Overview</h2>
            <div className="popularity">{Math.floor(movie.popularity as number)}%</div>
            <p className="overview">{movie.overview}</p>
            <div className="budget">$ {movie.budget}</div>
          </div>
        </div>
      </div>
    </div>
    <div className="personWrapper">
      <div className="personsContainer">
        <h2>Actors</h2>
        <div className="persons">
          {movie.credits?.cast?.slice(0, 10).map(person => {
            if(!person.profile_path) return;
            return <div className="person">
              <img src={getImage(person.profile_path, 'face')} alt="" />
              <div className="personData">
                <b>{person.name}</b>
                <p>{person.character}</p>
              </div>
            </div>;
          })}
        </div>
      </div>
    </div>
    <div className="reviewsWrapper">
      <div className="reviewsContainer">
        <h2 className="title">Comments</h2>
        <div className="reviews">
          {movie.reviews?.results?.map(review => <Review review={review}/>)}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Film;