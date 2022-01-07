import { Link } from 'react-router-dom';

export const NavBar = (): JSX.Element => (
  <nav style={navStyle}>
    <Link to="/" style={{ ...linkStyle, borderLeft: '1px solid black' }}>
      Home
    </Link>
    <Link to="/products" style={linkStyle}>
      Products
    </Link>
    <Link to="/todos" style={linkStyle}>
      Todo List
    </Link>
  </nav>
);

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-start',
  margin: '0px 0px 10px 0px',
};

const linkStyle: React.CSSProperties = {
  display: 'inline',
  padding: '0px 15px',
  backgroundColor: 'deepskyblue',
  borderRight: '1px solid black',
  borderBottom: '1px solid black',
  borderTop: '1px solid black',
  width: '70px',
  height: '30px',
  textDecoration: 'none',
  textAlign: 'center',
  color: 'black',
  verticalAlign: 'middle',
  lineHeight: '30px',
};
