import axios from "axios";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  /* promise 써보기 */
  // const onClick = () => {
  //   axios
  //     .get("http://jsonplaceholder.typicode.com/todos/1") //get 요청
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  /* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

  /* async/await 써보기 */
  const onClick = async () => {
    try {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/todos/1"
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
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
};

export default App;
