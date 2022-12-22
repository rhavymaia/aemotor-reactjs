import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import OnibusImg from "assets/img/1.svg";
import FuncionImg from "assets/img/3.svg";
import EstudanteImg from "assets/img/2.svg";
import MapaImg from "assets/img/4.svg";
import EscolaImg from "assets/img/5.svg";
// react-bootstrap components

function Inicio() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={{ order: "last" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={FuncionImg} />
              <Card.Body>
                <Card.Title>Funcionários</Card.Title>
                <Card.Text>Insira novos funcionários para gerenciar.</Card.Text>
                <Button variant="warning">Cadastrar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={MapaImg} />
              <Card.Body>
                <Card.Title>Rotas</Card.Title>
                <Card.Text>
                  Cadastrar cidade de origem e destino em que o veículo irá
                  circular.
                </Card.Text>
                <Button variant="warning">Cadastrar</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ order: "first" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={OnibusImg} />
              <Card.Body>
                <Card.Title>Veículos</Card.Title>
                <Card.Text>
                  Controle todos os veículos que estarão disponíveis para os
                  estudantes.
                </Card.Text>
                <Button variant="warning">Cadastrar</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={{ order: "last" }}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={EstudanteImg} />
              <Card.Body>
                <Card.Title>Estudante</Card.Title>
                <Card.Text>
                  Insira estudantes para controlar a 
                  quantidade assentos no ônibus.
                </Card.Text>
                <Button variant="warning">Cadastrar</Button>
              </Card.Body>
            </Card>
            
          </Col>
          <Col  xs={{ order: "last" }} md="8">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={EscolaImg} />
              <Card.Body>
                <Card.Title>Instituicão De Ensino</Card.Title>
                <Card.Text>
                  Cadastre as instituições que o veículo irá passar.
                </Card.Text>
                <Button variant="warning">Cadastrar</Button>
              </Card.Body>
            </Card>
            
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Inicio;
