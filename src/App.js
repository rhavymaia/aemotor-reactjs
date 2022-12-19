import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Index.module.css";
import Rotas from "./Rotas";
import Form from 'react-bootstrap/Form';
import logo from "./assets/Logo-Prefeitura.svg";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className={style.App}>
      <img src={logo} />
      <main>
      <Rotas />
      </main>
    </div>
  );
}

export default App;
