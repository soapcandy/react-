import React, { useState } from "react";

const BoardContext = React.createContext();

const BoardProvider = ({ children }) => {
  const [boardItemList, setBoardItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [edit, setEdit] = useState(false);

  const getInsertItem = (item) => {
    setBoardItemList([...boardItemList, item]);
  };

  const handleDeleteButton = (id) => {
    setBoardItemList(boardItemList.filter((item) => item.id !== id));
  };

  const handleModify = (updatedItem) => {
    setBoardItemList(
      boardItemList.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      )
    );
    setSelectedItem(updatedItem);
    setEdit(false);
  };

  const handleEditClick = () => setEdit(true);

  return (
    <BoardContext.Provider
      value={{
        boardItemList,
        selectedItem,
        edit,
        getInsertItem,
        handleDeleteButton,
        handleModify,
        handleEditClick,
        setSelectedItem,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};
export { BoardProvider };

export default BoardContext;
