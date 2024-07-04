import { useLocation } from "react-router-dom";
import "../styles/movieItem.css";

function MovieItem() {
  const movieId = useLocation();
  const item = movieId.state;

  console.log(movieId.state);
  return (
    <div className="movie-item-container">
      <div className="movie-item-title">
        {item.movieNm}({item.movieNmEn})
      </div>
      <div className="movie-item-info">제작국가: {item.nationAlt}</div>
      <div className="movie-item-info">개봉일: {item.openDt}</div>
      <div className="movie-item-info">제작상태: {item.prdtStatNm}</div>
      <div className="movie-item-info">제작연도: {item.prdtYear}</div>
      <div className="movie-item-info">장르명: {item.repGenreNm}</div>
      <div className="movie-item-info">유형: {item.typeNm}</div>
      <div className="movie-item-info">감독: {item.directors[0]?.peopleNm}</div>
    </div>
  );
}
export default MovieItem;
