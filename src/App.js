import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);
  const editBookById = (item) => {
    const updatedBooks = books.map((book) => {
      if (book.id === item.id) {
        return { ...book, title: item.title };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = (title) => {
    const data = {
      id: Math.round(Math.random() * 9999999),
      title,
    };
    setBooks([...books, data]);
  };
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList
        onUpdate={editBookById}
        books={books}
        onDelete={deleteBookById}
      />
    </div>
  );
};

export default App;
