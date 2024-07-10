import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Eduardo Scherer Bassani</h1>
        <nav className="header-nav">
          <a href="#about">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
