import { useState } from "react";

function Search({ searchValue }) {
  const [inputValue, setInputValue] = useState();

  const handleSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    searchValue(inputValue);
  };

  return (
    <div>
      <input type="textarea" onChange={handleSearch} />
      <button onClick={handleClick}>버튼</button>
    </div>
  );
}

export default Search;
