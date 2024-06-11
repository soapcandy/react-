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
        <table>
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.content}</td>
            <td>{item.complete}</td>
          </tr>
        </table>
      ))}
    </UnorderedList>
  );
};

export default TaskList;
