import NewsItem from "./NewsItem";
import styled from "styled-components";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    // usePromise를 호출하여 loading, response, error 변수에 할당(*순서 중요*)
    const query = category === "all" ? "" : `&category=${category}`; // query에 category값이 all이면 공백을, 그외에는 &카테고리 값을 저장
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=6b16364a82fb4060a0c0a421d9dff9ce`
    );
  }, [category]);

  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!response) {
    return null;
  }
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
