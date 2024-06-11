import { useState } from "react";
import Header from "./components/header/Header";
import NewTaskForm from "./components/task/NewTaskForm";
import TaskList from "./components/task/TaskList";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (content) => {
    setTasks([
      ...tasks,
      {
        id: v4(),
        content,
        complete: false,
      },
    ]);
  };

  return (
    <div>
      <Header />
      <NewTaskForm addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
