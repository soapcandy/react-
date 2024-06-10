import { useState } from "react";
import BoardInsert from "./components/BoardInsert";
import BoardList from "./components/BoardList";
import BoardDetail from "./components/BoardDetail";
import "./style/App.css";
function App() {
  const [boardItemList, setBoardItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const getHandleInsertItem = (item) => {
    setBoardItemList([...boardItemList, item]);
  };

  const handleDeleteButton = (id) => {
    setBoardItemList(boardItemList.filter((item) => item.id !== id));
  };

  const handleModify = (updatedItem) => {
    setBoardItemList(
      boardItemList.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setSelectedItem(updatedItem);
  };

  return (
    <div className="container">
      <div className="insert">
        <BoardInsert getHandleInsertItem={getHandleInsertItem} />
      </div>
      <div className="list">
        <BoardList
          boardItemList={boardItemList}
          setSelectedItem={setSelectedItem}
          handleDeleteButton={handleDeleteButton}
        />
        {selectedItem && (
          <BoardDetail item={selectedItem} handleModify={handleModify} />
        )}
      </div>
    </div>
  );
}

export default App;
