import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Cate Merritt</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
