import './styles.scss';
import { IoLogoOctocat } from 'react-icons/io';
import MainMenu from '../MainMenu';

export default function Header() {
	return (
		<>
			<header className='header'>
				<IoLogoOctocat />
				<h1>TaskJam</h1>
				<div className='author'>By Jamie Antonucci</div>
			</header>
			<MainMenu />
		</>
	);
}
