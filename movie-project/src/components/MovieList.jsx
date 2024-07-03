import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList({ searchValue }) {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(
          `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=8bf941816b80459f8ac9668dc2bfc236`
        );
        setMovieData(response.data.movieListResult.movieList);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieData();
  }, [searchValue]);

  return (
    <>
      {movieData.map((movie) => (
        <MovieItem
          key={movie.movieCd}
          movieData={movie}
          searchValue={searchValue}
        />
      ))}
    </>
  );
}
export default MovieList;
