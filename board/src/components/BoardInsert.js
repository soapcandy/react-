import { useState } from "react";

function BoardInsert({ insert }) {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const digits = (num) => {
    return num.toString().padStart(2, "0"); // 자릿 수 2자리
  };

  const handleInsert = () => {
    const date = new Date(); // 현재 시간 입력
    const formattedDate = `${date.getFullYear()} 
    -${digits(date.getMonth() + 1)}
    -${digits(date.getDate())}
    ${digits(date.getHours())}
    :${digits(date.getMinutes())}:
    ${digits(date.getSeconds())}`;

    insert({ title, user, content, date: formattedDate });
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
