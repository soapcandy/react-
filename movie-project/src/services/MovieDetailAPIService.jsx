import axios from "axios";

export const MovieDetailAPIService = async (movieId) => {
  try {
    const response = await axios.get(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=8bf941816b80459f8ac9668dc2bfc236&movieCd=${movieId}`
    );
    return response.data.movieInfoResult.movieInfo;
  } catch (e) {
    console.log(e);
  }
};
