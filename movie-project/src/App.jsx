import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import MovieItem from "./components/MovieItem";
import "./styles/styles.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <BrowserRouter>
      <MovieProvider>
        <div className="container">
          <Routes>
            <Route path="/" element={<MoviePage />} />
            <Route path="/:movieId" element={<MovieItem />} />
          </Routes>
        </div>
      </MovieProvider>
    </BrowserRouter>
  );
}

export default App;
