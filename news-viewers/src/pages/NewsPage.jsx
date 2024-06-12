import { useParams } from "react-router-dom";
import Categories from "../components/news/Categories";
import NewsList from "../components/news/NewsList";

/* React Router V6부터 사라진 방식 */
// const NewsPage = ({ match }) => {
//     const category = match.params.category || 'all';

const NewsPage = () => {
  // 카테고리가 선택되지 않았으면 기본값 all 로 사용
  const { category } = useParams();
  const selectedCategory = category || "all";

  return (
    <>
      <Categories />
      <NewsList category={selectedCategory} />
    </>
  );
};

export default NewsPage;
