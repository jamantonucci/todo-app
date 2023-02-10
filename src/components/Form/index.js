import { useState } from "react";

export default function Form({ onNewTask }) {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    setShowSuccess(false);

    const validate = [];

    if (title.length < 1) {
      validate.push("Please enter a task description.");
    }

    setErrorMessages(validate);

    if (validate.length === 0) {
      onNewTask(title, completed);
      setShowSuccess(true);

      // Clean form
      setTitle("");
      setCompleted(false);
    }
  };

  return (
    <>
      <h2>Add New Task:</h2>
      <form onSubmit={handleForm}>
        {/* Conditionally display success */}
        {showSuccess && (
          <>
            <p>
              <strong>Task added successfully!</strong>
            </p>
          </>
        )}

        {/* Conditionally display error */}
        {errorMessages.length > 0 && (
          <div>
            <strong>Error:</strong>
            <ul>
              {errorMessages.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Task Description field */}
        <label>
          Task Description:
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            maxLength={50}
            placeholder="Enter new task..."
            // required={true} (Removed to test error message)
          />
        </label>

        <br />

        {/* Task Status field */}
        <label>
          Status:
          <br />
          <select
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="" disabled>
              - Choose One -
            </option>
            <option value={false} key="f">
              To Do
            </option>
            <option value={true} key="t">
              Done
            </option>
          </select>
        </label>

        <br />

        <button>Add</button>
      </form>
    </>
  );
}
