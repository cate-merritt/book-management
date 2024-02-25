import React from 'react'; 
import { Form, Button } from 'react-bootstrap'; 

// Contact component
function Contact() {
  return (
    <div className="container text-center">
      <hr className="my-4" /> {/* Horizontal line */}
      <h2>Let's Connect!</h2> {/* Heading for contact section */}
      <p>If you have questions, feedback, or inquiries, please get in touch.</p> {/* Contact message */}
      
      {/* Contact information */}
      <div className="border border-dark rounded p-3 mb-3">
        <div className="row">
          <div className="col">
            <h3>Contact Information</h3>
            <p>Email: cate@loonsrule.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Main Street, Hell, Norway</p>
          </div>
        </div>
      </div>

      {/* Opening Hours */}
      <div className="border border-dark rounded p-3 mb-3">
        <div className="row">
          <div className="col">
            <h3>Events</h3>
            <p>Gather at the campfire for silent group reading every Monday
              and Wednesday 2pm</p>
              <p>Old-Time Jam Every Friday 4 pm</p>
            <p>Open Mic Every Tuesday 6pm</p>
            <p><center><b>All Dogs welcome!</b></center></p>
          </div>
        </div>
      </div>

      {/* Form for sending a message */}
      <div className="border border-dark rounded p-3 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Send a Message</h3>
            <Form>
              {/* Form fields for name, email, and message */}
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

              {/* Submit button */}
              <Button variant="dark" type="submit" className="mt-3"> {/* Added class mt-3 */}
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; // Exporting Contact component


