import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <a href="#intro" id="link">
          <div id="home-button">
            <img src="images/W.png" id="W" />ayne 
          </div>
        </a>
        <div id="menu">
          <a href="#projects-container" className="header-links">Projects</a>
          <a href="#experience-container" className="header-links">Experience</a>
          <a href="#interests-container" className="header-links">Interests</a>
          <a href="#contact-container" className="header-links">Contact</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;

