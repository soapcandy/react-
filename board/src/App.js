import { useState } from "react";
import BoardInsert from "./components/BoardInsert";
import BoardList from "./components/BoardList";
function App() {
  const [insertData, setInsertData] = useState([]);

  const handleInsert = (item) => {
    setInsertData([...insertData, item]);
  };
  return (
    <div>
      <BoardList insertData={insertData}></BoardList>
      <BoardInsert insert={handleInsert}></BoardInsert>
    </div>
  );
}

export default App;
