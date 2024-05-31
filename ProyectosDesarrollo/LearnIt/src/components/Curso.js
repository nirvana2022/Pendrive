import React from 'react'
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from "react-bootstrap/Button";

function Curso() {
  return (
    <Card>
      <Card.Img variant="top" src="../img/logo_web.png" />
        <Card.Body>
          <Card.Title>Nombre</Card.Title>
          <Card.Text>
            "Descripción..."
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <ProgressBar now={60} />
          <small className="text-muted">Last Update...</small>
          <br></br>
          <Button variant="success">Ingresar</Button>{' '}
        </Card.Footer>
      </Card>
  )
}

export default Curso