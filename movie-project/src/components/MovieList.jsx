import { Link } from "react-router-dom";

function MovieList({ movieData, searchValue }) {
  const { movieNm, movieNmEn, prdtYear, typeNm, directors } = movieData;

  const isMatch = movieData.movieNm.includes(searchValue); // searchValue가 포함된 값만 ismatch에 저장

  if (isMatch) {
    return (
      <div>
        <Link to={`/${movieData.movieCd}`} state={movieData}>
          {movieNm} {movieNmEn}
        </Link>
        <div>
          {prdtYear} {typeNm} {directors[0]?.peopleNm}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
export default MovieList;
