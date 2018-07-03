import React from 'react';

const Intro = (props) => {
  return (
    <div id="intro" className="section-container">
      <div id="intro-statement-avatar">
        <div id="intro-statement">
          I'm Wayne West, a self-taught, full-stack engineer focused on building applications that make
          people happy and more productive
        </div>
        <img src="images/myAvatar.svg" id="avatar" /> 
      </div>
      <div id="intro-email">
        Get in touch at: 
        <a href="mailto:waynekwest88@gmail.com" target="_blank"> waynekwest88@gmail.com</a>
      </div>
    </div>
  )
}

export default Intro;