import { useState } from "react";
import uuid from "react-uuid";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Form from "./components/Form";
import "./styles/index.scss";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Finish JavaScript lab",
      id: uuid(),
      complete: false,
    },
    {
      title: "Create Loom video",
      id: uuid(),
      complete: false,
    },
    {
      title: "Submit to FOL Dropbox",
      id: uuid(),
      complete: false,
    },
  ]);

  const handleChangeStatus = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.completed = task.completed ? false : true;
      }
    });
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id) => {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter(function (task) {
      return task.id !== id;
    });
    setTasks(updatedTasks);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const handleNewTask = (title, completed) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      id: uuid(),
      title,
      completed,
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <Header />
      <main className="app-main">
        <Tasks
          tasks={tasks}
          deleteAll={deleteAll}
          handleNewTask={handleNewTask}
          handleRemoveTask={handleRemoveTask}
          handleChangeStatus={handleChangeStatus}
        />
        <Form onNewTask={handleNewTask} />
      </main>
    </div>
  );
}

export default App;
