function BoardDelete({ handleDeleteButton, itemId, label }) {
  return <button onClick={() => handleDeleteButton(itemId)}>{label}</button>;
}
export default BoardDelete;
