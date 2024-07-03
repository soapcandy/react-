function MovieItem({ movieData, searchValue }) {
  const { movieNm, movieNmEn, prdtYear, typeNm, directors } = movieData;
  const isMatch = movieData.movieNm.includes(searchValue); // searchValue가 포함된 값만 ismatch에 저장

  if (isMatch) {
    return (
      <>
        <div>
          {movieNm} {movieNmEn}
        </div>
        <div>
          {prdtYear} {typeNm} {directors[0].peopleNm}
        </div>
      </>
    );
  } else {
    return null;
  }
}
export default MovieItem;
