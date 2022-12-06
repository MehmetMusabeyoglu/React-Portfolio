import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import CV from '../assets/CV.pdf';

export default function Resume() {
  return (
    <div>
    <h2 className="text-center text-light pt-3 "><b>My Skills</b></h2>
    <ListGroup variant="flush">
      <ListGroup.Item variant="dark">HTML5</ListGroup.Item>
      <ListGroup.Item variant="dark">CSS</ListGroup.Item>
      <ListGroup.Item variant="dark">JavaScript</ListGroup.Item>
      <ListGroup.Item variant="dark">jQuery</ListGroup.Item>
      <ListGroup.Item variant="dark">Node.js</ListGroup.Item>
      <ListGroup.Item variant="dark">Express.js</ListGroup.Item>
      <ListGroup.Item variant="dark">MySQL</ListGroup.Item>
      <ListGroup.Item variant="dark">MongoDB</ListGroup.Item>
      <ListGroup.Item variant="dark">React</ListGroup.Item>
    </ListGroup>
      <h2 className="text-center text-light pt-3">My resume is <a class="text-muted" href={CV} download="CV.pdf"> here </a> </h2>
   
    </div>
  );
}