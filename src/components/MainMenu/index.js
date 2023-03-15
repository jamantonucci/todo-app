import './styles.scss';
import { NavLink } from 'react-router-dom';

export default function MainMenu() {
	return (
		<nav className='main'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/multi-add'>Multi-Add</NavLink>
			<NavLink to='/about'>About Us</NavLink>
			<NavLink to='/support'>Support</NavLink>
		</nav>
	);
}
