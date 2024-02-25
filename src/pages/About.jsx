import React from 'react';
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function About() {
    return (
        <div>
            <hr className="my-4" /> {/* Horizontal line */}
            <Accordion defaultActiveKey="0" style={{ marginBottom: '20px' }}> {/* Accordion component with defaultActiveKey set to "0" and marginBottom for padding */}
                {/* First Accordion.Item */}
                <Accordion.Item eventKey="0"> {/* First Accordion.Item with eventKey set to "0" */}
                    <Accordion.Header>Who We Are</Accordion.Header> {/* Header for the first Accordion.Item */}
                    <Accordion.Body> {/* Body for the first Accordion.Item */}
                       <div>
                        <p>Book lovers are the custodians of worlds within pages,
                        explorers of boundless imagination, and seekers of timeless wisdom.
                        Enveloped in the scent of well-loved paper and ink,
                        they navigate through narratives,
                        weaving through plots and characters with an insatiable
                        thirst for stories. With each page turned,
                        they embark on journeys to distant lands,
                        traverse through the corridors of history,
                        and delve into the depths of human emotions.
                        For a book lover, every book is a treasure trove waiting
                        to be discovered, cherished, and shared.
                        They find solace in the embrace of a good book,
                        finding companionship in the characters and wisdom in the words.
                        Their passion for literature transcends time and space,
                        shaping their worldview and igniting their imagination
                        with every flicker of the page</p>
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"> {/* Second Accordion.Item with eventKey set to "1" */}
                    <Accordion.Header>Why We Built This App</Accordion.Header> {/* Header for the second Accordion.Item */}
                    <Accordion.Body> {/* Body for the second Accordion.Item */}
                        <div>
                        <p>We built this app out of our deep love for books and
                        our burning desire to share that love with the world.
                        As avid book lovers ourselves, we understand the transformative
                        power of literature and the profound impact it can have
                        on individuals and communities. Our journey with books has
                        enriched our lives in countless ways, opening our minds to
                        new ideas, cultures, and perspectives. We believe that everyone
                        deserves access to the magical realm of literature,
                        and this app is our humble attempt to make that vision a reality.
                        By providing a platform that celebrates the written
                        word and connects readers with their next great adventure,
                        we hope to inspire a lifelong love of reading and
                        foster a community of book enthusiasts who share
                        in the joy of storytelling.</p>
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        <img src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnl8ZW58MHx8MHx8fDA%3D" alt="Book Lover" style={{ maxWidth: '200px' }} />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default About; // Exporting About component
