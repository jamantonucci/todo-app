import { useState } from 'react';
import './styles.scss';
import {
	MdOutlineCheckBoxOutlineBlank,
	MdOutlineCheckBox,
} from 'react-icons/md';
import { BiPlusCircle } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/taskSlice';

export default function NewTask() {
	const [title, setTitle] = useState('');
	const [completed, setCompleted] = useState(false);
	const [errorMessages, setErrorMessages] = useState([]);
	const [showSuccess, setShowSuccess] = useState(false);

	let dispatch = useDispatch();

	const handleNewTask = (e) => {
		e.preventDefault();
		setShowSuccess(false);
		const validate = [];

		if (title.length < 1) {
			validate.push('Please enter a task description.');
		}

		setErrorMessages(validate);

		if (validate.length === 0) {
			const data = { title, completed };
			console.log(data);
			dispatch(addTask(data));
			setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000)

			// Clean NewTask
			setTitle('');
			setCompleted(false);
		}
	};

	function handleChangeStatus() {
		completed ? setCompleted(false) : setCompleted(true);
		console.log(completed);
	}

	return (
		<div className='NewTask-component'>
			<form onSubmit={handleNewTask} className='NewTask'>
				<div className='NewTask-status'>
					{/* Conditionally display success */}
					{showSuccess && (
						<div className='success'>Task added successfully!</div>
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

				<main>
					<button
						onClick={handleChangeStatus}
						type='button'
						className='complete-button'
					>
						{completed && <MdOutlineCheckBox className='completed-yes' />}
						{!completed && (
							<MdOutlineCheckBoxOutlineBlank className='completed-no' />
						)}
					</button>

					<div className='task-info'>
						{/* Task Description field */}
						<input
							type='text'
							onChange={(e) => setTitle(e.target.value)}
							value={title}
							maxLength={50}
							placeholder='Enter new task...'
						/>

						<br />

						{/* Task Status field */}
						<div className='task-status'>
							Status:
							<select
								value={completed}
								onChange={(e) => {
									setCompleted(e.target.value);
									console.log(e.target.value);
								}}
							>
								<option value='' disabled>
									- Choose One -
								</option>
								<option value={false} key='f'>
									To Do
								</option>
								<option value={true} key='t'>
									Done
								</option>
							</select>
						</div>
					</div>

					<button className='add-task-button'>
						<BiPlusCircle />
					</button>
				</main>
			</form>
		</div>
	);
}
