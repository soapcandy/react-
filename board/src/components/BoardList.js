import { useState } from "react";
import BoardDetail from "./BoardDetail";

function BoardList({ insertData }) {
  const [selectItem, setSelectItem] = useState();
  console.log(selectItem);

  const handleClick = (item) => {
    setSelectItem(item);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>게시일자</th>
          </tr>
        </thead>
        <tbody>
          {insertData.map((item, index) => (
            <tr key={index}>
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
