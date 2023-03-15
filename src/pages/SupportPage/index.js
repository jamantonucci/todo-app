import PageContainer from '../../components/PageContainer';
import { NavLink, Outlet } from 'react-router-dom';

export default function SupportPage() {
  return (
    <PageContainer>
      <nav class='submenu'>
        <NavLink to='add'>Adding Tasks</NavLink>
        <NavLink to='change'>Changing Status</NavLink>
        <NavLink to='delete'>Removing Tasks</NavLink>
      </nav>

      <article>
        <Outlet />
      </article>
    </PageContainer>
  )
}