import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React

// Custom hook useLocalStorage for managing state with local storage
const useLocalStorage = (key, initialValue) => {
  // Using useState hook to create state variable 'value' and setter function 'setValue'
  const [value, setValue] = useState(() => {
    try {
      // Attempting to retrieve data from local storage using the provided key
      const localValue = window.localStorage.getItem(key);
      // If data exists in local storage, parse and return it, otherwise return the initial value
      return localValue ? JSON.parse(localValue) : initialValue;
    } catch(err) {
      // If an error occurs during retrieval or parsing, return the initial value
      return initialValue;
    }
  });

  // Using useEffect hook to synchronize state changes with local storage
  useEffect(() => {
    // Storing the current value in local storage whenever 'value' or 'key' changes
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); // Dependencies array to ensure effect runs only when 'key' or 'value' changes

  // Returning the current value and the setter function to update it
  return [value, setValue];
}

export default useLocalStorage; // Exporting the useLocalStorage hook
