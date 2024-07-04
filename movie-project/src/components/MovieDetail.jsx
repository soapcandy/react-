import { useParams } from "react-router-dom";
import "../styles/movieDetail.css";
import { useLayoutEffect, useState } from "react";
import axios from "axios";

function MovieItem() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState("");
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    const fetchMovieData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=8bf941816b80459f8ac9668dc2bfc236&movieCd=${movieId}`
        );
        setMovieDetail(response.data.movieInfoResult.movieInfo);
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
        제작국가: {movieDetail ? movieDetail.nations[0]?.nationNm : "정보없음"}
      </div>
      <div className="movie-item-info">상영시간: {movieDetail.showTm}</div>
      <div className="movie-item-info">제작상태: {movieDetail.prdtStatNm}</div>
      <div className="movie-item-info">제작연도: {movieDetail.prdtYear}</div>
      <div className="movie-item-info">
        장르명: {movieDetail ? movieDetail.genres[0]?.genreNm : "정보없음"}
      </div>
      <div className="movie-item-info">유형: {movieDetail.typeNm}</div>
      <div className="movie-item-info">
        감독: {movieDetail ? movieDetail.directors[0]?.peopleNm : "정보없음"}
      </div>
    </div>
  );
}
export default MovieItem;
