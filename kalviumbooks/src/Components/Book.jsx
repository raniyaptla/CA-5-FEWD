// Book.jsx
import React from "react";
import "../App.css";

const Book = ({ book }) => {
  const imageUrl =
    book.imageLinks?.smallThumbnail || book.imageLinks?.thumbnail;
  // console.log(book)
  return (
    <div className="book">
      <img src={imageUrl} alt="bookimage" />
      <div className="book-details">
        <h3>Title: {book.title}</h3>
        {book.subtitle && <p>Subtitle: {book.subtitle}</p>}
        {!book.subtitle && <p>Publisher: {book.publisher}</p>}

        <p>Pagecount: {book.pageCount}</p>
        <p>Free</p>
      </div>
      <hr />
    </div>
  );
};

export default Book;
