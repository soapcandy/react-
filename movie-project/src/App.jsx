import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import MovieItem from "./components/MovieItem";
import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/styles.css";

function App() {
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

  if (loading) {
    return <div className="container">로딩중</div>;
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <MoviePage
                movieData={movieData}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
            }
          />
          <Route
            path="/:movieId"
            element={<MovieItem movieData={movieData} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
