import React from "react";
import Card from 'react-bootstrap/Card';

const Box = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
