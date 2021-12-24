import { Link } from 'react-router-dom';

export const NavBar = (): JSX.Element => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
  </nav>
);
