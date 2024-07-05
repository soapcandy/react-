import { useState } from "react";
import "../styles/search.css";

function Search({ setSearchValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    setInputValue(e.target.value); // 입력받은 글자를 inputValue에 저장
  };

  const handleClick = () => {
    setSearchValue(inputValue); // 버튼 클릭 시 app.js로 값 전달
  };

  return (
    <div>
      <div className="InputTextArea">
        <input type="textarea" onChange={handleSearch} />
        <button onClick={handleClick}>
          <img src="src\img\pngwing.png" alt="버튼" />
        </button>
      </div>
    </div>
  );
}

export default Search;
