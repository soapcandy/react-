import styled from "@emotion/styled";
import Toggle from "../toggle/Toggle";

const ListItem = styled.li`
  display: flex;
  width: 400px;
  height: 40px;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  box-sizing: border-box;
`;

const Content = styled.span`
  flex: 1;
  margin-left: 8px;
  font-size: 14px;
  text-decoration: ${({ complete }) => (complete ? "line-through" : "none")};
`;

const Task = ({ id, content, complete, props }) => {
  const updateTask = (id, status) => {
    props.setTasks(
      props.tasks.map((item) =>
        item.id === id ? { ...item, complete: status } : item
      )
    );
  };

  return (
    <ListItem {...props}>
      <Toggle on={complete} onChange={(e) => updateTask(id, e.target.value)} />
      <Content complete={complete}>{content}</Content>
    </ListItem>
  );
};

export default Task;
