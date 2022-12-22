import React from 'react'
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import style from "./Index.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

function CadastroPrefeitura() {
  return (
    <div>
        <Card
      bg="light"
      className="container align-self-center"
      style={{ width: "40rem" }}
    >
      <Card.Body>
        <Card.Title align="center">Cadastro de Prefeitura</Card.Title>
        <Card.Text>
          <Form className="">
            <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Cidade:</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Selecione a Cidade*</option>
                <option value="JP">JP</option>
                <option value="GBA">GBA</option>
            </Form.Select>
            </Form.Group>

            <Form.Group className="mb-1">
            <Form.Label>Prefeito:</Form.Label>
            <Form.Control type="text" placeholder="Nome do Prefeito*" />
            </Form.Group>

            <Form.Group className="mb-2">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" placeholder="Email da Prefeitura*" />
            </Form.Group>

            <Form.Group className="mb-3">
            <Form.Label>Telefone:</Form.Label>
            <Form.Control type="text" placeholder="Telefone da Prefeitura*" />
            </Form.Group>

            <Button className={style.Button} variant="warning" >Cadastrar</Button>{' '}
          </Form>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CadastroPrefeitura