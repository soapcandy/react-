import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:category?" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
