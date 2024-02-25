import React from 'react'; // Importing React library
import { Container, Row, Col, Image } from 'react-bootstrap'; // Importing Container, Row, Col, and Image components from react-bootstrap

// Photography component
const Photography = () => {
  return (
    <div className="mb-5"> {/* Adding margin at the bottom */}
      <Container> {/* Container for the photography section */}
        <hr className="my-4" /> {/* Horizontal line */}
        <h1 className="text-center mb-4">JUST KEEP READING!</h1> {/* Heading for the section */}
        <div className="border p-4 mb-4"> {/* Adding border and padding to wrap the paragraphs */}
          <p>"Read the best books first, or you may not have a chance to read them at all."</p>
          <p className="text-center">― Henry David Thoreau</p>
        </div>
        <Row className="mb-4"> {/* Row to contain the content with margin bottom */}
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
          <Col md={4} className="mb-3"> {/* Column to contain the image */}
            <Image src="https://64.media.tumblr.com/e44b154ae6f7f0fb7cb7b12533054687/tumblr_inline_p1udavMa0s1qeuw4m_1280.jpg" fluid alt="Mood Image 1" /> {/* Image */}
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default Photography; // Exporting Photography component
