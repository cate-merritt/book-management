import React from 'react'; // Importing React library
import { Container } from 'react-bootstrap'; // Importing Container component from react-bootstrap

// Footer component
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4"> {/* Footer section with dark background and light text */}
      <Container> {/* Container component from react-bootstrap */}
        <div className="text-center"> {/* Center-aligned text */}
          <p>&copy; {new Date().getFullYear()} Cate Merritt. All rights reserved.</p> {/* Copyright notice */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer; // Exporting Footer component
