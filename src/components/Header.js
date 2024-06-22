import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">[Your Name]</h1>
        <nav className="header-nav">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
