import { useState } from "react";
import BoardInsert from "./components/BoardInsert";
import BoardList from "./components/BoardList";
import "./style/App.css";
function App() {
  const [insertData, setInsertData] = useState([]);

  const handleInsert = (item) => {
    setInsertData([...insertData, item]);
  };
  return (
    <div className="container">
      <div className="insert">
        <BoardInsert insert={handleInsert} />
      </div>
      <div className="list">
        <BoardList insertData={insertData} />
      </div>
    </div>
  );
}

export default App;
