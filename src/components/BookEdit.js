import React, { useState } from "react";

const BookEdit = ({ book, onUpdate }) => {
  const [title, setTitle] = useState(book.title);
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ id: book.id, title });
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
