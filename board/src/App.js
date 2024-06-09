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

  const handleDelete = (id) => {
    setInsertData(insertData.filter((item) => item.id !== id));
  };

  const handleSave = (updatedItem) => {
    setInsertData(
      insertData.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setSelectedItem(updatedItem);
  };

  return (
    <div className="container">
      <div className="insert">
        <BoardInsert insert={handleInsert} />
      </div>
      <div className="list">
        <BoardList
          insertData={insertData}
          setSelectedItem={setSelectedItem}
          del={handleDelete}
        />
        {selectedItem && <BoardDetail item={selectedItem} onSave={handleSave} />}
      </div>
    </div>
  );
}

export default App;
