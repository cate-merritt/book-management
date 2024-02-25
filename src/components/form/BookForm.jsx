import { useState } from "react"; // Importing useState hook from React
import { v4 as uuidv4 } from 'uuid'; // Importing UUID library for generating unique IDs

// BookForm component
const BookForm = ({ book, handleSubmit }) => {
  // State for managing form inputs
  const [bookState, setBookState] = useState({
    name: book ? book.name : '', // Initializing with book name if provided, otherwise empty string
    author: book ? book.author : '', // Initializing with author name if provided, otherwise empty string
    price: book ? book.price : '', // Initializing with book price if provided, otherwise empty string
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setBookState({
      ...bookState,
      [e.target.name]: e.target.value // Updating state based on input changes
    })
  }

  // Function to handle form submission
  const onSubmit = (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    handleSubmit({
      id: uuidv4(), // Generating a unique ID for the book
      date: new Date(), // Setting current date as the submission date
      ...bookState // Adding book details from the form state
    });
    setBookState({ name: '', author: '', price: '' }) // Resetting form inputs after submission
  }

  // Function to render input fields
  const renderInputField = (label, placeholder, name) => (
    <div className="inputField">
      <label>{label}</label>
      <input value={bookState[name]} onChange={handleChange} name={name} type="text" placeholder={placeholder} /> {/* Input field */}
    </div>
  );

  // Determining whether the submit button should be disabled
  const disabledSubmit = !bookState.name || !bookState.author || !bookState.price;

  // Rendering the form
  return (
    <form onSubmit={onSubmit} className="form">
      {/* Rendering input fields */}
      {renderInputField('Book Title', 'Enter name of book...', 'name')}
      {renderInputField('Book Author', 'Enter name of author...', 'author')}
      {renderInputField('Book Price', 'Enter price of book...', 'price')}
      {/* Submit button */}
      <button type="submit" className="btnForm" disabled={disabledSubmit}>{book ? 'Update' : 'Submit'}</button>
    </form>
  )
}

export default BookForm // Exporting BookForm component
