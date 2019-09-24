import React from "react";
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <div className="page-notfound">
      <Container className="page-notfound-text text-center">
        <h2 className="h1 text-monospace text-light">Uh, Oh! Seems like you are lost.</h2>
        <h4 className="text-muted">Unfortunately you accessed an invalid page.</h4>
      </Container>
    </div>
  );
};

export default NotFound;
