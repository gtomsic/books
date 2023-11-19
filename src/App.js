import React, { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (item) => {
    const { data } = await axios.put(`http://localhost:3001/books/${item.id}`, {
      title: item.title,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === data.id) {
        return { ...book, ...data };
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    setBooks([...books, response.data]);
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
