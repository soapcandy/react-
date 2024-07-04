import Search from "./Search";
import MovieList from "./MovieList";
import "../styles/styles.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MoviePage() {
  const { movieData, searchValue, setSearchValue, loading } =
    useContext(MovieContext);
  return (
    <div>
      <div className="container">로고</div>
      <div className="search-container">
        <Search searchValue={setSearchValue} />
      </div>
      <div className="movie-list">
        {loading ? (
          <div className="container">로딩 중...</div>
        ) : (
          movieData.map((movie) => (
            <MovieList
              key={movie.movieCd}
              movieData={movie}
              searchValue={searchValue}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default MoviePage;
