function BoardDetail({ item }) {
  if (item) {
    return (
      <div>
        <h3>제목: {item.title}</h3>
        <div>작성자: {item.user}</div>
        <div>내용: {item.content}</div>
      </div>
    );
  }
}
export default BoardDetail;
