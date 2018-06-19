import React from 'react';

const Interests = (props) => {
  return (
    <div id="interests-container" className="section-container">
      <h3 className="section-headers">Interests</h3>
      <div className="align">
        <div className="interests-header">Books</div>
        {props.interests.books.map((book) => {
          return (
            <div id="books" className="interests-item">
              <div className="book-title"><a href={"https://www.goodreads.com/book/show/" + book.id}  target="_blank">{book.title} </a></div>
              <div className="book-author">by {book.author}</div>
            </div>
          )
        })}
        <div className="interests-header">Podcasts</div>
        {props.interests.podcasts.map((show) => {
          return (
            <div id="podcast" className="interests-item">
              <div className="podcast-name">{show.name}: </div>
              <div className="podcast-title"><a href={show.link}  target="_blank">{show.title} </a></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Interests;
