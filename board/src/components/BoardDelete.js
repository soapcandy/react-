function BoardDelete({ del, itemId }) {
  return <button onClick={() => del(itemId)}>지우기</button>;
}
export default BoardDelete;
