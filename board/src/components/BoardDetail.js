import { useContext } from "react";
import "../style/Detail.css";
import BoardEdit from "./BoardEdit";
import BoardContext from "../contexts/BoardContext";

function BoardDetail() {
  const { selectedItem, edit, handleEditClick } = useContext(BoardContext);

  if (!selectedItem) return null;

  return (
    <div className="board-detail">
      {edit ? (
        <BoardEdit item={selectedItem} />
      ) : (
        <>
          <h3>제목: {selectedItem.title}</h3>
          <div>작성자: {selectedItem.user}</div>
          <div>내용: {selectedItem.content}</div>
          <button onClick={handleEditClick}>수정</button>
        </>
      )}
    </div>
  );
}
export default BoardDetail;
