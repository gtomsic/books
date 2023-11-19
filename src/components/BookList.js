import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onUpdate }) => {
  const renderedBooks = books.map((book) => (
    <BookShow
      onUpdate={onUpdate}
      book={book}
      onDelete={onDelete}
      key={book.id}
    />
  ));
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
