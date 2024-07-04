import { Link } from "react-router-dom";
import "../styles/movieList.css";

function MovieList({ movieData, searchValue }) {
  const { movieNm, movieNmEn, prdtYear, typeNm, directors, movieCd } =
    movieData;
  const searchTerm = searchValue.trim();
  const isMatch = movieData.movieNm.includes(searchTerm);

  if (searchTerm === "") {
    return <div></div>;
  }

  if (isMatch) {
    return (
      <div className="movie-item">
        <Link to={`/${movieCd}`} className="movie-link">
          <h3 className="movie-title">{movieNm}</h3>
          <p className="movie-title-en">{movieNmEn}</p>
        </Link>
        <div className="movie-info">
          <p className="movie-year">{prdtYear}</p>
          <p className="movie-type">{typeNm}</p>
          <p className="movie-director">{directors[0]?.peopleNm}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default MovieList;
