import React, { useState, useContext } from "react";
import BooksContext from "../context/context";

const BookEdit = ({ book }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(BooksContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    editBookById({ id: book.id, title });
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input
        className="input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
};

export default BookEdit;
