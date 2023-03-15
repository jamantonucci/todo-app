import PageContainer from '../../components/PageContainer';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <PageContainer>
      <h2>404: Page Not Found</h2>
      <p>There's nothing here! Nothing at all!</p>
      <p><Link to='/'>Back to Home Page</Link></p>
    </PageContainer>
  )
}