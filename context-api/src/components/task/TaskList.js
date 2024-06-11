import styled from "@emotion/styled";
import Task from "./Task";
import { useTasks } from "../../contexts/TaskProvider";

const UnorderedList = styled.ul`
  width: 400px;
  margin: 16 0 0 0;
  padding: 0;

  & > li {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }
`;

const TaskList = () => {
  const { tasks } = useTasks();
  return (
    <UnorderedList>
      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;
