import Header from './components/Header';
import Tasks from './components/Tasks';
import Form from './components/Form';
import './styles/index.scss';

function App() {
	return (
		<div className='App'>
			<Header />
			<main className='app-main'>
				<Tasks />
				<Form />
			</main>
		</div>
	);
}

export default App;
