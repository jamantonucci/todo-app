import Task from "./Task";
import uuid from "react-uuid";
import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    {
      title: "Finish JavaScript lab",
      id: uuid(),
      status: "To Do",
    },
    {
      title: "Create Loom video",
      id: uuid(),
      status: "To Do",
    },
    {
      title: "Submit to FOL Dropbox",
      id: uuid(),
      status: "To Do",
    },
  ]);

  const handleChangeStatus = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        if (task.status === "Complete") {
          task.status = "To Do";
        } else {
          task.status = "Complete";
        }
      }
    });
    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id) => {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter(function (task) {
      return task.id != id;
    });
    setTasks(updatedTasks);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  let tasksCompleted = 0;
  tasks.forEach((task) => {
    if (task.status === "Complete") {
      tasksCompleted++;
    }
  });

  return (
    <main>
      <h2>Task List:</h2>
      <hr />
      {tasks.length > 0 && (
        <div>
          Tasks Completed: {tasksCompleted}/{tasks.length} (
          {((tasksCompleted / tasks.length) * 100).toFixed(0)}%)
        </div>
      )}

      {tasks.map((item) => (
        <Task
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
          onChangeStatus={handleChangeStatus}
          onRemoveTask={handleRemoveTask}
        />
      ))}
      <button onClick={deleteAll}>Delete All Tasks</button>
    </main>
  );
}