import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "../context/redux";
import { getData } from "../lib/api";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = useCallback(async () => {
    console.log('here');
  }, [])
  const increaseHandler = () => {
    
  }
  useEffect(() => {
    // getMovies();
  }, [])
  return (
  <div className="home">
      <Link to="home">Go home</Link>
      <button onClick={increaseHandler}>Increase</button>
    </div>
  )
}

export default Home;