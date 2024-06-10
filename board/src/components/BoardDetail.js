import { useState } from "react";
import "../style/Detail.css";
import BoardEdit from "./BoardEdit";

function BoardDetail({ item, handleModify }) {
  const [edit, setEdit] = useState(false);

  const handleEditClick = () => setEdit(true);

  const handleModifySave = (updatedItem) => {
    handleModify(updatedItem);
    setEdit(false);
  };

  if (!item) {
    return null;
  }

  return (
    <div className="board-detail">
      {edit ? (
        <BoardEdit item={item} handleModifySave={handleModifySave} />
      ) : (
        <>
          <h3>제목: {item.title}</h3>
          <div>작성자: {item.user}</div>
          <div>내용: {item.content}</div>
          <button onClick={handleEditClick}>수정</button>
        </>
      )}
    </div>
  );
}
export default BoardDetail;
