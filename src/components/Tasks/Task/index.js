import "./styles.scss";
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
  MdOutlineHighlightOff,
} from "react-icons/md";
import { useDispatch } from 'react-redux';
import { changeStatus, removeTask } from "../../../redux/taskSlice";
import * as database from '../../../database';

export default function Task({
  id,
  title,
  completed,
}) {
  const dispatch = useDispatch();

  const handleRemoveTask = async (event) => {
    event.preventDefault();
    dispatch(removeTask(id));

    const deleted = await database.remove(id);
    if (!deleted) {
      alert('Failed to delete task');
    }
  }

  const handleChangeStatus = async (event) => {
    event.preventDefault();
    dispatch(changeStatus(id));

    const data = { completed: !completed };
    const updated = await database.update(id, data);

    if (!updated) {
      alert('Failed to update status');
    }

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
        <h3 onClick={handleChangeStatus}>{title}</h3>
        <p className="id-field">ID: {id}</p>
      </div>
      <button onClick={handleRemoveTask} className="remove-task-button">
        <MdOutlineHighlightOff />
      </button>
    </div>
  );
}
