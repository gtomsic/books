import { useContext } from "react";
import BooksContext from "../context/context";

function useBooksContext() {
  return useContext(BooksContext);
}

export default useBooksContext;
