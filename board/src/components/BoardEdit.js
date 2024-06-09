import { useState } from "react";

function BoardEdit({ item, onSave }) {
    const [title, setTitle] = useState(item.title);
    const [user, setUser] = useState(item.user);
    const [content, setContent] = useState(item.content);
  
    const handleSave = () => {
      const updatedItem = {
        ...item,
        title,
        user,
        content,
      };
      onSave(updatedItem);
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
        <button onClick={handleSave}>저장</button>
      </div>
    );
  }
  
  export default BoardEdit;