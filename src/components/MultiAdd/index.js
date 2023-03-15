import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';
import './styles.scss';
import { Link } from 'react-router-dom';
import {
	MdOutlineCheckBoxOutlineBlank,
	MdOutlineCheckBox,
} from 'react-icons/md';

export default function MultiAdd() {
	const [tasksToAdd, setTasksToAdd] = useState('');
	const [newTaskCount, setNewTaskCount] = useState(0);
	const [errorMessages, setErrorMessages] = useState([]);
	const [showSuccess, setShowSuccess] = useState(false);
	const [autoCompleteNew, setAutoCompleteNew] = useState(false);

	let dispatch = useDispatch();

	const handleMultiAdd = (event) => {
		event.preventDefault();
		setShowSuccess(false);
		const validate = [];

		if (tasksToAdd.length < 1) {
			validate.push('Please enter at least one new task.');
		}

		setErrorMessages(validate);

		if (validate.length === 0) {
			const newTasks = tasksToAdd.split(',');
			setNewTaskCount(newTasks.length);

			newTasks.map((newTask) => {
				const data = {
					title: newTask,
					completed: autoCompleteNew,
				};
				return dispatch(addTask(data));
			});

			setShowSuccess(true);

			// Clean
			setTasksToAdd('');
		}
	};

	function handleChangeStatus(event) {
		event.preventDefault();
		setAutoCompleteNew(autoCompleteNew ? false : true);
		console.log(autoCompleteNew);
	}

	return (
		<form className='multi-add' onSubmit={handleMultiAdd}>
			<div className='NewTask-status'>
				{/* Conditionally display success */}
				{showSuccess && (
					<div className='success'>
						Successfully added {newTaskCount} new task
						{newTaskCount > 1 ? 's' : ''}!
						<br />
						<Link to='/'>« Back to tasks</Link>
					</div>
				)}

				{/* Conditionally display error */}
				{errorMessages.length > 0 && (
					<div className='error'>
						<strong>Error:</strong>
						<ul>
							{errorMessages.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>
				)}
			</div>

			<textarea
				type='text'
				onChange={(e) => setTasksToAdd(e.target.value)}
				value={tasksToAdd}
				maxLength={50}
				placeholder='Enter new tasks here, separated by a comma.'
			/>

			<button onClick={handleChangeStatus} className='complete-button'>
				{autoCompleteNew && <MdOutlineCheckBox className='completed-yes' />}
				{!autoCompleteNew && (
					<MdOutlineCheckBoxOutlineBlank className='completed-no' />
				)}
				Mark new tasks as completed automatically
			</button>
			<button>Add Tasks</button>
		</form>
	);
}
