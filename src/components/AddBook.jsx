import { useContext } from "react"; // Importing useContext hook from React for accessing context
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router for navigation
import { BookContext } from "../context/BookContext"; // Importing BookContext for accessing book data context
import BookForm from "./form/BookForm"; // Importing BookForm component

// AddBook component
const AddBook = () => {
  const navigate = useNavigate(); // Hook for navigation
  const { books, setBooks } = useContext(BookContext); // Using BookContext to get access to books state

  // Function to handle form submission
  const handleOnSubmit = (book) => {
    setBooks([book, ...books]); // Adding new book to the list of books
    navigate('/'); // Navigating back to the homepage after submission
  }

  // Rendering the AddBook component
  return (
    <div className="addForm">
      <BookForm handleSubmit={handleOnSubmit} /> {/* Rendering BookForm component */}
    </div>
  )
}

export default AddBook // Exporting AddBook component
