import { Link } from "react-router-dom";
import { MovieInterface } from "../interfaces/Movie";
import { getImage } from "../lib/api";

interface Props {
  movie: MovieInterface;
  type: 'films' | 'series',
}
const Card: React.FC<Props> = ({ movie, type }) => {
  return <div className="card">
    <Link to={`${type}/${movie.id}`}>
      <img src={getImage(movie.poster_path, 300)} alt="" />
      <p className="title">{movie.name || movie.title}</p>
      <p className="release">{movie.first_air_date || movie.release_date}</p>
    </Link>
    
  </div>
}

export default Card;