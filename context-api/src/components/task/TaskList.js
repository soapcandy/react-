import styled from "@emotion/styled";
import Task from "./Task";

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

const TaskList = (props) => {
  return (
    <UnorderedList {...props}>
      {props.tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          content={item.content}
          complete={item.complete}
          props={props}
        />
      ))}
    </UnorderedList>
  );
};

export default TaskList;
