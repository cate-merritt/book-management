import { NavLink } from "react-router-dom"; // Importing NavLink component from React Router for navigation

// Header component
const Header = () => {
  // Array containing navigation links and their corresponding paths
  const navigation = [
    { path: '/', name: 'View List' }, // Link to view list page
    { path: '/add', name: 'Add Item' }, // Link to add item page
  ];

  // Rendering the Header component
  return (
    <header>
      <h1>Your Favorite Books</h1> {/* Title of the header */}
      <nav>
        {/* Mapping through navigation array to render NavLink for each link */}
        {navigation.map(nav => (
          <NavLink
            key={nav.name} // Unique key for each NavLink
            to={nav.path} // Path to navigate to
          >
            {nav.name} {/* Text to display for the NavLink */}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header; // Exporting Header component