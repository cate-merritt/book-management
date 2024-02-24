import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions, feedback, or inquiries, feel free to get in touch with us!</p>
      
      <h3>Contact Information</h3>
      <p>Email: example@example.com</p>
      <p>Phone: +1234567890</p>
      <p>Address: 123 Main Street, City, Country</p>

      <h3>Opening Hours</h3>
      <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
      <p>Saturday - Sunday: Closed</p>

      <h3>Send us a Message</h3>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
