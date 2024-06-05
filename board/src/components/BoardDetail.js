import "../style/Detail.css";

function BoardDetail({ item }) {
  if (item) {
    return (
      <div className="board-detail">
        <h3>제목: {item.title}</h3>
        <div>작성자: {item.user}</div>
        <div>내용: {item.content}</div>
      </div>
    );
  }
}
export default BoardDetail;
