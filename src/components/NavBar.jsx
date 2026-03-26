import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          GameTracker 🎮
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>My Games</Link>
        </li>
        <li>
          <Link to="/add" style={styles.link}>Add Game</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: '#2c3e50',
    color: 'white',
    height: '60px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  logoLink: {
    color: 'white',
    textDecoration: 'none'
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '20px',
    margin: 0,
    padding: 0
  },
  link: {
    color: '#ecf0f1',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s'
  }
};

export default Navbar;