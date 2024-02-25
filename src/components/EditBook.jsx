import { useContext } from "react"; // Importing useContext hook from React for accessing context
import { useNavigate, useParams } from "react-router-dom"; // Importing useNavigate and useParams hooks from React Router for navigation and accessing URL parameters
import { BookContext } from "../context/BookContext"; // Importing BookContext for accessing book data context
import BookForm from "./form/BookForm"; // Importing BookForm component

// EditBook component
const EditBook = () => {
  const { id } = useParams(); // Retrieving the 'id' parameter from the URL
  const navigate = useNavigate(); // Hook for navigation
  const { books, setBooks } = useContext(BookContext); // Using BookContext to get access to books state
  const bookToEdit = books.filter(book => book.id === id); // Filtering the book to be edited based on its ID

  // Function to handle form submission
  const handleOnSubmit = (book) => {
    const filteredBook = books.filter(book => book.id !== id); // Filtering out the edited book from the list
    setBooks([book, ...filteredBook]); // Updating the books state with the edited book
    navigate('/'); // Navigating back to the homepage after submission
  }

  // Rendering the EditBook component
  return (
    <div className="addForm">
      <BookForm book={bookToEdit[0]} handleSubmit={handleOnSubmit} /> {/* Rendering BookForm component with the book to be edited */}
    </div>
  )
}

export default EditBook; // Exporting EditBook component
