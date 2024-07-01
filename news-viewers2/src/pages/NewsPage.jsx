import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const { category } = useParams();
  const selectCategory = category || "all";
  return (
    <>
      <Categories />
      <NewsList category={selectCategory} />
    </>
  );
};

export default NewsPage;
