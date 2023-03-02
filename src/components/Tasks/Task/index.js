import { useState, useEffect } from "react";
import "./styles.scss";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineHighlightOff,
} from "react-icons/md";

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
    <div className="task">
      <button onClick={handleChangeStatus} className="complete-button">
        {completed && <MdOutlineCheckBox className="completed-yes" />}
        {!completed && (
          <MdOutlineCheckBoxOutlineBlank className="completed-no" />
        )}
      </button>
      <div className="task-info">
        <h3>{title}</h3>
        <p className="id-field">ID: {id}</p>
      </div>
      <button onClick={handleRemoveTask} className="remove-task-button">
        <MdOutlineHighlightOff />
      </button>
    </div>
  );
}
