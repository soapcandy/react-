import { useState } from "react";
import MovieList from "./components/MovieList";
import Search from "./components/Search";
import "./styles/styles.css";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [searchValue, setSearchValue] = useState();

  return (
    <div style={{ display: "flex" }}>
      <div>
        <div>로고</div>
        <Search searchValue={setSearchValue} />
        <MovieList searchValue={searchValue} />
      </div>
      <div>
        <MovieDetail />
      </div>
    </div>
  );
}

export default App;
