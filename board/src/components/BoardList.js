function BoardList({ insertData }) {
  // 게시판 리스트를 보여준다

  return (
    <table>
      <tr>
        <th>제목</th>
        <th>작성자</th>
        <th>게시일자</th>
      </tr>
      {insertData.map((item) => (
        <tr>
          <td>{item.title}</td>
          <td>{item.user}</td>
          <td>{item.date}</td>
        </tr>
      ))}
    </table>
  );
}
export default BoardList;
