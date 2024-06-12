import Header from "./components/header/Header";
import NewTaskForm from "./components/task/NewTaskForm";
import TaskList from "./components/task/TaskList";
import TaskProvider from "./contexts/TaskProvider";

function App() {
  return (
    <TaskProvider>
      <Header />
      <NewTaskForm />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
