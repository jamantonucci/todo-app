import Task from "./Task";
import "./styles.scss";
import { HiOutlineTrash } from "react-icons/hi";

export default function Tasks({
  tasks,
  handleChangeStatus,
  handleRemoveTask,
  deleteAll,
}) {
  let tasksCompleted = 0;
  tasks.forEach((task) => {
    if (task.completed) {
      tasksCompleted++;
    }
  });

  const getPercentComplete = (tasksCompleted, tasksTotal) => {
    var percent = ((tasksCompleted / tasksTotal) * 100).toFixed(0) + "%";
    return percent;
  };

  return (
    <main className="task-list-component">
      <h2>Task List:</h2>
      {tasks.length > 0 && (
        <div className="progress">
          Tasks Completed: {tasksCompleted}/{tasks.length} (
          {getPercentComplete(tasksCompleted, tasks.length)})
          <div className="progress-bar">
            <div
              className="progress-bar-progress"
              style={{
                width: getPercentComplete(tasksCompleted, tasks.length),
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="task-list">
        {tasks.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            title={item.title}
            completed={item.completed}
            onChangeStatus={handleChangeStatus}
            onRemoveTask={handleRemoveTask}
          />
        ))}
      </div>

      <button onClick={deleteAll} className="delete-all-button">
        <HiOutlineTrash />
        Delete All
      </button>
    </main>
  );
}
