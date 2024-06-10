import { useContext } from "react";
import BoardInsert from "./components/BoardInsert";
import BoardList from "./components/BoardList";
import "./style/App.css";
import BoardContext from "./contexts/BoardContext";
import BoardDetail from "./components/BoardDetail";

function App() {
  const { selectedItem } = useContext(BoardContext);

  return (
    <div className="container">
      <div className="insert">
        <BoardInsert />
      </div>
      <div className="list">
        <BoardList />
        {selectedItem && <BoardDetail />}
      </div>
    </div>
  );
}

export default App;
