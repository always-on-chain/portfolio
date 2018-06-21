import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#intro" id="link">
        <div id="home-button">
          <img src="images/W.png" id="W" />ayne 
        </div>
      </a>
      <div id="menu">
        <a href="#intro" className="header-links">About</a>
        <a href="#projects-container" className="header-links">Projects</a>
        <a href="#experience-container" className="header-links">Experience</a>
        <a href="#interests-container" className="header-links">Interests</a>
      </div>
    </header>
  )
}

export default Header;

