import React from 'react';

const Header = () => {
  return (
    <header>
      <a href="#intro" id="link">
        <div id="home-button">
          <img src="images/W.png" className="W" />ayne 
          {/* <img src="images/W.png" class="W" />est */}
        </div>
      </a>
      <div id="menu">
        <div className="header-tabs">About</div>
        <div className="header-tabs">Projects</div>
        <div className="header-tabs">Experience</div>
        <div className="header-tabs">Interests</div>
      </div>
    </header>
  )
}

export default Header;

