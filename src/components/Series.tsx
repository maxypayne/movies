import { useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { MovieInterface } from "../interfaces/Movie";
import { getData } from "../lib/api";
import Card from "./Card";

const Series = (params:any) => {
  const { id } = useParams();
  console.log({id});
  
  const [series, setSeries]: [MovieInterface[], any] = useState([]);
  const getMovieHandler = useCallback(async () => {
    const data: any = await getData(`/tv/popular`);
    console.log(data);
    setSeries(data.results);
  }, [id]);
  useEffect((): any => {
    getMovieHandler();
  }, [getMovieHandler]);
  return <div className="page movies">
    <div className="seriesContainer">
      {!!series.length && series?.map((movie, key) => <Card key={'card' + key} type="series" movie={movie}/>)}
    </div>
  </div>
}

export default Series;