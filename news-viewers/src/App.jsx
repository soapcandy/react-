import { useCallback, useState } from "react";
import Categories from "./components/news/Categories";
import NewsList from "./components/news/NewsList";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
