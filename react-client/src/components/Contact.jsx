import React from 'react';

const Contact = (props) => {
  return (
    <div id="contact-container" className="section-container">
      <div id="contact-info"></div>
      {props.contact.map((contactType) => {
        return (
          <div id="contact-type">
            <a href={contactType.url} target="_blank">
              <img src={contactType.image} className="contact-image" />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Contact;