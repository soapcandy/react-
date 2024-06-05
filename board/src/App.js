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
      <BoardInsert insert={handleInsert} />
      <BoardList insertData={insertData} />
    </div>
  );
}

export default App;
