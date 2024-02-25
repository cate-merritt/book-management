import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from React Router for navigation
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Book = ({ book, handleRemoveBook }) => {
  const navigate = useNavigate(); // Hook for navigation
  const { id, name, author, price, date } = book; // Destructuring book object

  // Rendering the Book component
  return (
    <div className="book">
      <h2>{name}</h2> {/* Displaying book name */}
      <div className="bookDetail">
        <p>Author: {author}</p> {/* Displaying author */}
        <p>Price: {price}</p> {/* Displaying price */}
        <p>Date: {new Date(date).toDateString()}</p> {/* Displaying formatted date */}
      </div>
      <div className="buttons">
        {/* Button to navigate to edit page */}
        <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
        {/* Button to handle book removal */}
        <button onClick={() => handleRemoveBook(id)}>Delete</button>
      </div>
    </div>
  )
}

export default Book // Exporting Book component
