import React, { useContext } from "react";
import BooksContext from "../context/context";
import BookShow from "./BookShow";

const BookList = () => {
  const { books } = useContext(BooksContext);
  const renderedBooks = books.map((book) => (
    <BookShow book={book} key={book.id} />
  ));
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
