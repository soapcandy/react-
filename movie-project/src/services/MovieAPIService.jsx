import axios from "axios";

export const MovieAPIService = async (searchTerm) => {
  try {
    const response = await axios.get(
      `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=8bf941816b80459f8ac9668dc2bfc236&movieNm=${searchTerm}`
    );
    return response.data.movieListResult.movieList;
  } catch (e) {
    console.log(e);
  }
};
