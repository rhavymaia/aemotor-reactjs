
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {React, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from 'react-bootstrap/Alert';

function EnviarConvite() {
  const [email, emailChange] = useState("");
  const [mensagem, mensagemChange] = useState("");
  const [visible, setVisible] = useState(false);

  URL = "http://127.0.0.1:5000";

  const handleSubmit = (e) => {
    e.preventDefault();

    const campos = { email, mensagem };

      fetch(URL + "/prefeitura/convite", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(campos),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((data) => {
          setVisible(true);
          setTimeout(() => {
            setVisible(false);
          }, 3000);
          console.log("mensagem enviada com sucesso", data);
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <>
      {visible && (
        <Alert
          className="container align-self-center"
          variant="success"
        >
          E-mail enviado com sucesso!
        </Alert>
      )}

      <Card
        className="container align-self-center "
        style={{ background: "#D9D9D9" }}
      >
        <Card.Body>
          <Card.Text>
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3 mt-4 "
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Destinatário</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => emailChange(e.target.value)}
                  placeholder="email@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Mensagem</Form.Label>
                <Form.Control
                  as="textarea"
                  required
                  rows={10}
                  value={mensagem}
                  onChange={(e) => mensagemChange(e.target.value)}
                />
              </Form.Group>
              <div>
                <Button
                  type="submit"
                  variant="warning"
                >
                  Enviar
                </Button>{" "}
              </div>
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default EnviarConvite;
