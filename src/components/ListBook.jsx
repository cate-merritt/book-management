import { useContext } from "react"; // Importing useContext hook from React for accessing context
import { BookContext } from "../context/BookContext"; // Importing BookContext for accessing book data context
import Book from "./Book"; // Importing Book component

// ListBook component
const ListBook = () => {
  const { books, setBooks } = useContext(BookContext); // Using BookContext to get access to books state

  // Function to handle book removal
  const handleRemoveBook = (id) => {
    const filteredBooks = books.filter(book => book.id !== id); // Filtering out the book to be removed
    setBooks(filteredBooks); // Updating the books state after removal
  }

  // Rendering the ListBook component
  return (
    <div className="listBook">
      {/* Conditional rendering based on whether there are books */}
      {books.length ? books.map(book => (
        <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} /> // Rendering Book component for each book
      )) : (
        <p className="noData">Add books to view them here!</p> // Message when there are no books
      )}
    </div>
  )
}

export default ListBook; // Exporting ListBook component
