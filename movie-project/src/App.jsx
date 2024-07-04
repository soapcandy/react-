import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import MovieItem from "./components/MovieItem";

import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MoviePage />} />
          <Route path="/:movieId" element={<MovieItem />} />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
