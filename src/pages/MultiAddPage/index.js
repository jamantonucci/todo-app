import PageContainer from '../../components/PageContainer';
import MultiAdd from '../../components/MultiAdd';
import { Link } from 'react-router-dom';

export default function MultiAddPage() {
	return (
		<PageContainer className='multi-add-page'>
			<h2>Multi-Add:</h2>
			<p>
				Use this page to add many tasks at once, separated by commas. Use the checkbox at the bottom if you would like all new tasks to automatically be marked as completed.
			</p>
			<p>
				<Link to='/support/add'>Need more help?</Link>
			</p>

			<MultiAdd />
		</PageContainer>
	);
}
