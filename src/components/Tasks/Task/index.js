import { useState, useEffect } from "react";

export default function Task({
  id,
  title,
  completed,
  onChangeStatus,
  onRemoveTask,
}) {
  const [buttonText, setButtonText] = useState(() => {
    return completed ? "Mark as To Do" : "Mark as Complete";
  });

  useEffect(() => {
    let newButtonText = "";
    if (completed) {
      newButtonText = "Mark as To Do";
    } else {
      newButtonText = "Mark as Complete";
    }
    setButtonText(newButtonText);
  }, [completed]);

  function handleChangeStatus() {
    onChangeStatus(id);
  }

  function handleRemoveTask() {
    onRemoveTask(id);
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>
        ID: {id}
        <br />
        Status: {completed ? "Completed" : "To Do"}
      </p>
      <div>
        <button onClick={handleChangeStatus}>{buttonText}</button>
        <button onClick={handleRemoveTask}>Remove Task</button>
      </div>
      <hr />
    </div>
  );
}
