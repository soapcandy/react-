import { useState } from "react";

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
      <input type="textarea" onChange={handleSearch} />
      <button onClick={handleClick}>버튼</button>
    </div>
  );
}

export default Search;
