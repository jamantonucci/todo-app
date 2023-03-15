import { MdOutlineHighlightOff } from 'react-icons/md';

export default function SupportDelete() {
	return (
		<>
			<h2>Removing Tasks</h2>
			<p className='long-p'>Tasks can be removed by clicking on the <MdOutlineHighlightOff color='red' /> button on the right side of each task. You can also remove all tasks at once by clicking the red <strong>Delete All</strong> button at the bottom of the task list. <strong>Please be careful, as this action cannot be undone.</strong></p>
		</>
	);
}
