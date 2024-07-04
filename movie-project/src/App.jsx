import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/:movieId" element={<MovieDetail />} />
        </Routes>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
