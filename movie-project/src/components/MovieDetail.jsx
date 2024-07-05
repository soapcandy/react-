import { useParams } from "react-router-dom";
import "../styles/movieDetail.css";
import { useLayoutEffect, useState } from "react";
import { MovieDetailAPIService } from "../services/MovieDetailAPIService";

function MovieItem() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await MovieDetailAPIService(movieId);
        setMovieDetail(response);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchMovieData();
  }, [movieId]);

  if (loading) {
    return <div>영화 정보를 불러오는중...</div>;
  }
  return (
    <div className="movie-item-container">
      <div className="movie-item-title">
        {movieDetail.movieNm} {movieDetail.movieNmEn}
      </div>
      <div className="movie-item-info">
        <div>
          제작국가:{" "}
          {movieDetail ? movieDetail.nations[0]?.nationNm : "정보없음"}
        </div>
        <div>상영시간: {movieDetail.showTm}</div>
        <div>제작상태: {movieDetail.prdtStatNm}</div>
        <div>제작연도: {movieDetail.prdtYear}</div>
        <div>
          장르명: {movieDetail ? movieDetail.genres[0]?.genreNm : "정보없음"}
        </div>
        <div>유형: {movieDetail.typeNm}</div>
        <div>
          감독: {movieDetail ? movieDetail.directors[0]?.peopleNm : "정보없음"}
        </div>
      </div>
    </div>
  );
}
export default MovieItem;
