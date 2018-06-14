import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#intro" id="link">
        <div id="home-button">
          <img src="images/W.png" class="W" />ayne 
          {/* <img src="images/W.png" class="W" />est */}
        </div>
      </a>
      <div id="menu">
        <div id="about" className="header-tabs">About</div>
        <div id="projects" className="header-tabs">Projects</div>
        <div id="resume" className="header-tabs">Resume</div>
        <div id="contact" className="header-tabs">Contact</div>
      </div>
    </header>
  )
}

export default Header;

