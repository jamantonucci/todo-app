import Header from './components/Header';
import './styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MultiAddPage from './pages/MultiAddPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import SupportPage from './pages/SupportPage';
import SupportIntro from './pages/SupportPage/SupportIntro';
import SupportAdd from './pages/SupportPage/Add';
import SupportChange from './pages/SupportPage/Change';
import SupportDelete from './pages/SupportPage/Delete';

function App() {
	return (
		<div className='App'>
			<Header />

			<main className='app-main'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/multi-add' element={<MultiAddPage />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/support' element={<SupportPage />}>
						<Route path='' element={<SupportIntro />} />
						<Route path='add' element={<SupportAdd />} />
						<Route path='change' element={<SupportChange />} />
						<Route path='delete' element={<SupportDelete />} />
					</Route>
					<Route path='*' element={<NotFoundPage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
