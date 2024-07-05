import { Link } from "react-router-dom";
import "../styles/movieItem.css";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

function MovieList({ movie }) {
  const { movieNm, movieNmEn, prdtYear, typeNm, directors, movieCd } = movie;
  const { searchValue } = useContext(MovieContext);
  const isMatch = movie.movieNm.includes(searchValue);

  console.log(searchValue);

  if (searchValue === "") {
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
