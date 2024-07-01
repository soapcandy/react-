import { useParams } from "react-router-dom";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const { category } = useParams(); // 현재 주소의 세그먼트를 category라는 이름으로 저장
  const selectCategory = category || "all"; // selectCategory에 category값을 저장하되 값이 없으면 all을 저장
  return (
    <>
      <Categories />
      <NewsList category={selectCategory} />
    </>
  );
};

export default NewsPage;
