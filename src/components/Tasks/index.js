import Task from "./Task";

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
          completed={item.completed}
          onChangeStatus={handleChangeStatus}
          onRemoveTask={handleRemoveTask}
        />
      ))}
      <button onClick={deleteAll}>Delete All Tasks</button>
    </main>
  );
}
