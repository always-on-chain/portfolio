import React from 'react';

const Interests = (props) => {
  return (
    <div id="interests-container" className="section-container">
      <h3 className="section-headers">Interests</h3>
      <div className="align">
        <div className="interests-header">Books</div>
        {props.interests.books.map((book) => {
          return (
            <div id="books">
              <div className="book-title">
                <a href={"https://www.goodreads.com/book/show/" + book.id}  target="_blank">{book.title} </a>
              </div>
              <div className="book-author">by {book.author}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Interests;
