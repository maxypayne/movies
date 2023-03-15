import './styles/reset.scss';
import './styles/home.scss';
import './styles/card.scss';
import './styles/header.scss';
import './styles/variables.scss';
import './styles/global.scss';
import './styles/movie.scss';
import './styles/series.scss';
// import './styles/serie.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { GlobalCtxProvider } from './context/globalCtx';
import Header from './components/Header';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Series from './components/Series';


function App() {
  return (
    <GlobalCtxProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='series' element={<Series />} />
          <Route path='series/:id' element={<Series />} />
          <Route path='films/' element={<Movies />} />
          <Route path='films/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </GlobalCtxProvider>
  );
}

export default App;
