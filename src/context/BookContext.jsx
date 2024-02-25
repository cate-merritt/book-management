import { createContext } from "react"; // Importing createContext function from React

// Importing useLocalStorage hook from '../hooks/useLocalStorage'
import useLocalStorage from "../hooks/useLocalStorage";

// Creating a context named BookContext
export const BookContext = createContext();

// BookProvider component
const BookProvider = ({ children }) => {
  // Using useLocalStorage hook to manage books state, initializing with an empty array if no data found in local storage
  const [books, setBooks] = useLocalStorage('books', []);

  // Creating a value object containing books state and setBooks function
  const value = { books, setBooks };

  // Rendering BookProvider component with the provided children and passing value to the context
  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}

export default BookProvider; // Exporting BookProvider component
