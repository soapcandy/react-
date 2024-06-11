import { useContext, useState } from "react";
import fomattedDate from "../utils/fomattedDate";
import "../style/Insert.css";
import BoardContext from "../contexts/BoardContext";
import InputField from "./InputField";

function BoardInsert() {
  const { getInsertItem } = useContext(BoardContext);

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

    getInsertItem({ id: newId, title, user, content, date });

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
      <InputField label="제목" name="title" type="text" value={title} onChange={onChange} />
      <InputField label="작성자" name="user" type="text" value={user} onChange={onChange} />
      <InputField
        label="내용"
        name="content"
        type="textarea"
        value={content}
        placeholder="내용을 입력하세요"
        onChange={onChange}
        onKeyUp={handleKeyUp}
        />
      <button onClick={handleInsert}>저장</button>
    </div>
  );
}
export default BoardInsert;
