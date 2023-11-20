import { createContext, useState, useCallback } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = useCallback(async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
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
  const values = {
    books,
    deleteBookById,
    editBookById,
    createBook,
    fetchBooks,
  };
  return (
    <BooksContext.Provider value={values}>{children}</BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
