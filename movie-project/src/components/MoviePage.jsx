import Search from "./Search";
import MovieList from "./MovieList";

function MoviePage({ movieData, searchValue, setSearchValue }) {
  return (
    <>
      <div>로고</div>
      <Search searchValue={setSearchValue} />
      {movieData.map((movie) => (
        <MovieList
          key={movie.movieCd}
          movieData={movie}
          searchValue={searchValue}
        />
      ))}
    </>
  );
}
export default MoviePage;
