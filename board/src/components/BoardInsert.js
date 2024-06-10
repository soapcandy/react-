import { useState } from "react";
import fomattedDate from "../utils/fomattedDate";
import "../style/Insert.css";

function BoardInsert({ getHandleInsertItem }) {
  const [inputs, setInputs] = useState({
    title: "",
    user: "",
    content: "",
    id: 0,
  });

  const { title, user, content, id } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleInsert = () => {
    const newId = id + 1;
    const date = fomattedDate();

    getHandleInsertItem({ id: newId, title, user, content, date });

    setInputs({
      id: newId,
      title: "",
      user: "",
      content: "",
    });
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleInsert();
    }
  };

  return (
    <div className="board-insert">
      <div>
        제목
        <input
          name="title"
          type="text"
          value={title}
          onChange={onChange}
        ></input>
      </div>
      <div>
        작성자
        <input name="user" type="text" value={user} onChange={onChange}></input>
      </div>
      <div>
        내용
        <textarea
          name="content"
          value={content}
          placeholder="내용을 입력하세요"
          rows="10"
          cols="50"
          onChange={onChange}
          onKeyUp={handleKeyUp}
        ></textarea>
      </div>
      <button onClick={handleInsert}>저장</button>
    </div>
  );
}
export default BoardInsert;
