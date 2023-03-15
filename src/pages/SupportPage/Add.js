import { Link } from 'react-router-dom';

export default function SupportAdd() {
	return (
		<>
			<h2>Adding New Tasks</h2>
			<p className='long-p'>
				To add a new task from the home page, scroll to the bottom of the task
				list and enter your new task in the field at the bottom. You can use the
				drop-down menu or the checkbox to toggle the status of the task.
				Pressing <strong>Enter</strong> or clicking on the green plus symbol
				will add the task to the list.
			</p>
			<h3>Multi-Add</h3>
			<p className='long-p'>
				If you have a lot of tasks to add at once, it may be more useful to use
				the <Link to='multi-add'>Multi-Add</Link> page. From that page, you can
				add as many tasks as you like at a time, with each task separated by a
				comma. Pressing <strong>Enter</strong> or clicking the{' '}
				<strong>Add Tasks</strong> button will add the tasks to the list.
			</p>
			<p className='long-p'>
				Using the checkbox at the bottom of the page, you can choose whether new
				tasks should be marked as complete automatically. By default, they will
				be marked as incomplete.{' '}
			</p>
		</>
	);
}
