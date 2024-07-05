import { createContext, useState, useEffect } from "react";
import { MovieAPIService } from "../services/MovieAPIService";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieData, setMovieData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await MovieAPIService(searchValue);
        setMovieData(response);
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
