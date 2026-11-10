
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar-container ${isOpen ? "is-open" : ""}`}>
      <div className="leftSide">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Deutsch Journey logo" />
        </Link>
        <Link to="/" className="brand-name" onClick={closeMenu}>
          Deutsch Journey
        </Link>
      </div>

      <div className="rightSide">
        <div className="desktopLinks">
          <Link to="/">Home</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/loginregister">Login / Register</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <button
          className="menuButton"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      <div className="hiddenLinks">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/lessons" onClick={closeMenu}>Lessons</Link>
        <Link to="/loginregister" onClick={closeMenu}>Login / Register</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;


