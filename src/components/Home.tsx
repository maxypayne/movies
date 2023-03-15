import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../lib/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = useCallback(async () => {
    console.log('here');
  }, [])
  
  useEffect(() => {
    // getMovies();
  }, [])
  return (
  <div className="home">
      <Link to="home">Go home</Link>
    </div>
  )
}

export default Home;