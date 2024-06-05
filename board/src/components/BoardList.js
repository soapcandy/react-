import "../style/List.css";
import BoardDelete from "./BoardDelete";

function BoardList({ insertData, setSelectedItem, del }) {
  const handleClick = (item) => {
    setSelectedItem(item);
  };

  // 페이지 네이션 추가해야함
  return (
    <div className="board-list">
      <table>
        <thead>
          <tr>
            <th>제목</th>
            <th>작성자</th>
            <th>게시일자</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {insertData.map((item) => (
            <tr key={item.id}>
              <td className="list-title" onClick={() => handleClick(item)}>
                {item.title}
              </td>
              <td>{item.user}</td>
              <td>{item.date}</td>
              <td>
                <BoardDelete del={del} itemId={item.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default BoardList;
