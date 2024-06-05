import BoardList from "./components/BoardList";
function App() {
  const test = [
    {
      title: "제목1",
      user: "작성자1",
      content: "내용1",
      date: "2024-06-05",
    },
    {
      title: "제목2",
      user: "작성자2",
      content: "내용2",
      date: "2024-06-06",
    },
  ];
  return <BoardList test={test}></BoardList>;
}

export default App;
