import { useState } from "react";
import MovieList from "./components/MovieList";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = useState();

  return (
    <>
      <div>로고</div>
      <Search searchValue={setSearchValue} />
      <MovieList searchValue={searchValue} />
    </>
  );
}

export default App;
