import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=8bf941816b80459f8ac9668dc2bfc236&movieNm=${searchValue}`
        );
        setMovieData(response.data.movieListResult.movieList);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovieData();
  }, [searchValue]);

  return (
    <MovieContext.Provider
      value={{
        movieData,
        searchValue,
        setSearchValue,
        loading,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
