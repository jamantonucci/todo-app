import Task from './Task';
import './styles.scss';
import { HiOutlineTrash } from 'react-icons/hi';
import {
	MdOutlineCheckBoxOutlineBlank,
	MdOutlineCheckBox,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import {
	deleteAllTasks,
	completeAllTasks,
	incompleteAllTasks,
} from '../../redux/taskSlice';
import { useDispatch } from 'react-redux';
import * as database from '../../database';

export default function Tasks() {
	let tasks = useSelector((state) => state.task.tasks);
	let tasksCompleted = 0;
	let dispatch = useDispatch();

	tasks.forEach((task) => {
		if (task.completed) {
			tasksCompleted++;
		}
	});

	const getPercentComplete = (tasksCompleted, tasksTotal) => {
		var percent = ((tasksCompleted / tasksTotal) * 100).toFixed(0) + '%';
		return percent;
	};

	const deleteAll = async (event) => {
		event.preventDefault();
		dispatch(deleteAllTasks());

		tasks.forEach((task) => {
			database.remove(task.id);
		}
			
		);
	};

	const completeAll = async (event) => {
		event.preventDefault();
		dispatch(completeAllTasks());

		tasks.forEach((task) => {
			const data = { completed: true };
			database.update(task.id, data);
		})
	}

	function incompleteAll(event) {
		event.preventDefault();
		dispatch(incompleteAllTasks());

		tasks.forEach((task) => {
			const data = { completed: false };
			database.update(task.id, data);
		})
	}

	return (
		<main className='task-list-component'>
			<h2>Task List:</h2>
			{tasks.length > 0 && (
				<div className='progress'>
					Tasks Completed: {tasksCompleted}/{tasks.length} (
					{getPercentComplete(tasksCompleted, tasks.length)})
					<div className='progress-bar'>
						<div
							className='progress-bar-progress'
							style={{
								width: getPercentComplete(tasksCompleted, tasks.length),
							}}
						></div>
					</div>
				</div>
			)}

			<div className='task-list'>
				{tasks.map((item) => (
					<Task
						key={item.id}
						id={item.id}
						title={item.title}
						completed={item.completed}
					/>
				))}
			</div>

			<div className='change-all-buttons'>
				<button onClick={completeAll} className='complete-all-button'>
					<MdOutlineCheckBox />
					Complete All
				</button>
				<button onClick={incompleteAll} className='incomplete-all-button'>
					<MdOutlineCheckBoxOutlineBlank />
					Complete None
				</button>
				<button onClick={deleteAll} className='delete-all-button'>
					<HiOutlineTrash />
					Delete All
				</button>
			</div>
		</main>
	);
}
