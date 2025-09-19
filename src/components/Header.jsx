import React, { useState } from "react";
import BraillePlayLogo from "../assets/BraillePlay.svg";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top app-navbar">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="/" aria-label="Braille Play home">
          <img src={BraillePlayLogo} alt="Braille Play" className="logo-image" />
        </a>
        <button className="navbar-toggler border-0 px-2" type="button" onClick={toggleMenu} aria-label="Open menu">
          <i className="bi bi-list" style={{ fontSize: "1.5rem" }}></i>
        </button>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex align-items-center">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
          </ul>
          <a className="btn btn-brand ms-lg-3" href="#start">
            <i className="bi bi-play-circle me-1"></i> Start Braille
          </a>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="mobile-menu-overlay" onClick={closeMenu}>
            <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-menu-header">
                <h5 className="mobile-menu-title">Menu</h5>
                <button type="button" className="mobile-menu-close" onClick={closeMenu} aria-label="Close">
                  <i className="bi bi-x" style={{ fontSize: "1.5rem" }}></i>
                </button>
              </div>
              <div className="mobile-menu-body">
                <ul className="mobile-nav-list">
                  <li className="mobile-nav-item">
                    <a className="mobile-nav-link" href="#about" onClick={closeMenu}>
                      About
                    </a>
                  </li>
                  <li className="mobile-nav-item">
                    <a className="mobile-nav-link" href="#features" onClick={closeMenu}>
                      Features
                    </a>
                  </li>
                  <li className="mobile-nav-item">
                    <a className="mobile-nav-link btn btn-brand w-100" href="#start" onClick={closeMenu}>
                      <i className="bi bi-play-circle me-1"></i> Start Braille
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
