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
        <div id="about">About</div>
        <div id="projects">Projects</div>
        <div id="resume">Resume</div>
        <div id="contact">Contact</div>
      </div>
    </header>
  )
}

export default Header;

