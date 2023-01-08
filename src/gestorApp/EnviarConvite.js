import React from "react";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
function EnviarConvite() {
  return (
    <Card
      bg="light"
      className="container align-self-center"
      style={{ width: "90rem" }}
    >
      <Card.Body>
        <Card.Title>Enviar Convite</Card.Title>
        <Card.Text>
          <Form className="">
            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Destinatário</Form.Label>
              <Form.Control type="email" placeholder="email@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Mensagem</Form.Label>
              <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Button variant="warning">Enviar</Button>{' '}
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EnviarConvite;
