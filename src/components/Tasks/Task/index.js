import { useState, useEffect } from "react";

export default function Task({id, title, status, onChangeStatus, onRemoveTask}) {
    const [buttonText, setButtonText] = useState(() => {
        return (status === 'Complete') ? 'Mark as To Do' : 'Mark as Complete'
    })

    useEffect(() => {
        let newButtonText = '';
        if (status === 'Complete') {
            newButtonText = 'Mark as To Do';
        } else {
            newButtonText = 'Mark as Complete';
        }
        setButtonText(newButtonText);
    }, [handleChangeStatus]);

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
                Status: {status}
            </p>
            <div>
                <button onClick={handleChangeStatus}>{buttonText}</button>
                <button onClick={handleRemoveTask}>Remove Task</button>
            </div>
            <hr />
        </div>
    )
}