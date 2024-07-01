import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=6b16364a82fb4060a0c0a421d9dff9ce`
      )
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;
