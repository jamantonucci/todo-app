import "./styles.scss";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineHighlightOff,
} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { changeStatus, removeTask } from "../../../redux/taskSlice";

export default function Task({
  id,
  title,
  completed,
}) {
  const dispatch = useDispatch();

  function handleRemoveTask(event) {
    event.preventDefault();
    dispatch(removeTask(id));
  }

  function handleChangeStatus(event) {
    event.preventDefault();
    dispatch(changeStatus(id));
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
