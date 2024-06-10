import { useState } from "react";

function BoardEdit({ item, handleModifySave }) {
  const [title, setTitle] = useState(item.title);
  const [user, setUser] = useState(item.user);
  const [content, setContent] = useState(item.content);

  const handleSaveButton = () => {
    const updatedItem = {
      ...item,
      title,
      user,
      content,
    };
    handleModifySave(updatedItem);
  };

  return (
    <div className="board-edit">
      <h3>게시물 수정</h3>
      <div>
        <label>제목: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>작성자: </label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div>
        <label>내용: </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleSaveButton}>저장</button>
    </div>
  );
}

export default BoardEdit;
