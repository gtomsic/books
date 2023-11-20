import React, { useState, useContext, useEffect } from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/context";

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useContext(BooksContext);

  const handleDelete = (id) => {
    deleteBookById(id);
  };

  useEffect(() => {
    setShowEdit(false);
  }, [book]);

  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} />;
  }

  return (
    <div className="book-show">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={() => setShowEdit(!showEdit)}>
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(book.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
