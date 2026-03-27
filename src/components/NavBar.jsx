import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/" className="logoLink">
          GameTracker 🎮
        </Link>
      </div>
      <ul className="navLinks">
        <li>
          <Link to="/" className="link">
            My Games
          </Link>
        </li>
        <li>
          <Link to="/add" className="link">
            Add Game
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
