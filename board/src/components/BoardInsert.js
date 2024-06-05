import { useState } from "react";
import FomattedDate from "./FomattedDate";

function BoardInsert({ insert }) {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(0);

  const handleInsert = () => {
    setId(id + 1);
    const date = FomattedDate();

    insert({ id, title, user, content, date });
  };

  return (
    <div>
      <div>
        제목
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div>
        작성자
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      </div>
      <div>
        내용
        <textarea
          value={content}
          placeholder="내용을 입력하세요"
          rows="10"
          cols="50"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleInsert}>저장</button>
    </div>
  );
}
export default BoardInsert;
