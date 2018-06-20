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
        <div className="interests-header">Basketball</div>
          <div id="basketball" className="interests-item">
            <div className="basketball-info">Though I live in the Bay, I am a huge LeBron James fan!</div>
            <div className="basketball-info">I played competively in high school and made the <a href="http://www.hawaiiprepworld.com/boys-basketball/all-state-boys-basketball-1997-2010/" target="_blank">2006</a> Hawaii All State Basketball team</div>
          </div>
      </div>
    </div>
  )
}

export default Interests;
