import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import LogoMain from "../../assets/img/logo-main.svg"
import { Link } from "react-router-dom";

function Inicio() {
  
  return (
    <>
      <Container className="align-items-center">
        <img src={LogoMain} />
      </Container>
    </>
  );
}

export default Inicio;
