import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalCtx } from "../context/globalCtx";
import logo from '../assets/logo.svg';
import { getData } from "../lib/api";
import { MovieInterface } from "../interfaces/Movie";

interface Props {
  id: number;
  title: string;
}
export const Header = () => {
  const [isOpen, setIsOpen]: any = useState();
  const [isSearchOpen, setIsSearchOpen]: any = useState();
  const { desktop } = useContext(GlobalCtx);
  const [movies, setMovies] = useState([]);
  const searchMovies = async(e: any) => {
    const data: any = await getData('search/movie', `&query=${e.target.value}`);
    if (data?.results?.length) {
      setMovies(data.results.slice(0, 10));
    } else {
      // show error
    }
  }
  const links = [
    {path: 'films', label: 'Films'},
    {path: 'series', label: 'Series'},
    {path: 'personnes', label: 'Personnes'},
  ];
  return(
    <header id="header" className={`${isOpen && !desktop ? 'fixed' : ''}`}>
      <div className="headerContainer">
        <Link to='/' className="logoContainer">
          <img src={logo} alt={'Logo'}/>
        </Link>
        { (desktop || (!desktop && isOpen)) && <ul className="menu">
          {links.map(({path, label}, key) => <Link className="link" key={'link' + key} to={`/${path}`}>{label}</Link>)}
          </ul>
        }
        {isSearchOpen
          ? <span className="icons icon-close" onClick={() => setIsSearchOpen(false)}/>
          : <span className="icons icon-search" onClick={() => setIsSearchOpen(true)}/> 
        }       
        {!desktop && <span className={`icons icon-${isOpen ? 'close' : 'menu'}`} onClick={() => setIsOpen(!isOpen)}/>}
        { isSearchOpen && <div className="dropDownContainer">
          <input type="text" className="searchInput" placeholder="Recherche..." onChange={searchMovies} />
          <div className="searchList">
            {!!movies.length && movies.map((movie: MovieInterface, i) => {
              return <Link className="item" onClick={() => setIsSearchOpen(false)} key={`item_${i}`} to={`films/${movie.id}`}>{movie.title}</Link>
            })}
          </div>
        </div> }
      </div>
    </header>
  )
}
export default Header;