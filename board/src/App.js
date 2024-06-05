import { useState } from "react";
import BoardInsert from "./components/BoardInsert";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import "./style/App.css";
function App() {
  const [insertData, setInsertData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleInsert = (item) => {
    setInsertData([...insertData, item]);
  };
  return (
    <div className="container">
      <div className="insert">
        <BoardInsert insert={handleInsert} />
      </div>
      <div className="list">
        <BoardList insertData={insertData} setSelectedItem={setSelectedItem} />
      </div>
      <div>{selectedItem && <BoardDetail item={selectedItem} />}</div>
    </div>
  );
}

export default App;
