import Search from "./Search";
import MovieList from "./MovieList";
import "../styles/styles.css";

function MoviePage({ movieData, searchValue, setSearchValue, loading }) {
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
              loading={loading}
            />
          ))
        )}
      </div>
    </div>
  );
}
export default MoviePage;
