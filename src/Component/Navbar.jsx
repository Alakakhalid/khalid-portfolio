
import React, { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo and Brand */}
      <a
        href="#home"
        className="navbar-brand"
        aria-label="Khalid Portfolio, home"
        onClick={closeMenu}
      >
        <div className="logo-icon" aria-hidden="true">
          <span>{"<K/>"}</span>
        </div>

        <div className="logo-text">
          <span className="name">KHALID</span>
          <span className="title">PORTFOLIO</span>
        </div>
      </a>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="nav-links"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Links */}
      <ul
        id="nav-links"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About Me
          </a>
        </li>

        <li>
          <a href="#service" onClick={closeMenu}>
            Services
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
