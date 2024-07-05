import Search from "./Search";
import MovieItem from "./MovieItem";
import "../styles/movieList.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MoviePage() {
  const { movieData, setSearchValue, loading } = useContext(MovieContext);
  return (
    <div>
      <div className="logo">로고</div>
      <div className="search">
        <Search setSearchValue={setSearchValue} />
      </div>
      <div className="movie-list">
        {loading ? (
          <div className="loading">로딩 중...</div>
        ) : (
          movieData.map((movie) => (
            <MovieItem key={movie.movieCd} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}
export default MoviePage;
