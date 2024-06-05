import { useState } from "react";
import BoardDetail from "./BoardDetail";
import "../style/List.css";

function BoardList({ insertData }) {
  const [selectItem, setSelectItem] = useState();
  console.log(selectItem);

  const handleClick = (item) => {
    setSelectItem(item);
  };

  return (
    <div className="board-list">
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>게시일자</th>
          </tr>
        </thead>
        <tbody>
          {insertData.map((item) => (
            <tr key={item.id}>
              <td onClick={() => handleClick(item)}>{item.title}</td>
              <td>{item.user}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BoardDetail item={selectItem} />
    </div>
  );
}
export default BoardList;
