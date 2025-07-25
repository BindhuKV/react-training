import { Link } from 'react-router-dom'
import '../css/pages/NotFoundPage.css'

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="home-link">Go to Homepage</Link>
    </div>
  );
}

export default NotFoundPage