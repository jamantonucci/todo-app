import PageContainer from '../../components/PageContainer';
import Tasks from '../../components/Tasks';
import NewTask from '../../components/NewTask';
import { Link } from 'react-router-dom';

export default function HomePage() {
	return (
		<PageContainer className='allow-flex'>
			<Tasks />
			<h2>Quick Add:</h2>
			<p>Want to add several tasks at once? Try <Link to='/multi-add'>Multi-Add!</Link></p>
			<NewTask />
		</PageContainer>
	);
}
