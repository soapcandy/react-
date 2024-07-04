import { useLocation } from "react-router-dom";

function MovieItem() {
  const movieId = useLocation();
  const item = movieId.state;

  console.log(movieId.state);
  return (
    <div>
      <div>{item.movieNm}</div>
      <div>{item.movieNmEn}</div>
      <div>{item.nationAlt}</div>
      <div>{item.openDt}</div>
      <div>{item.prdtStatNm}</div>
      <div>{item.prdtYear}</div>
      <div>{item.repGenreNm}</div>
      <div>{item.repNationNm}</div>
      <div>{item.typeNm}</div>
    </div>
  );
}
export default MovieItem;
