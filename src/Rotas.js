import React from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import EnviarConvite from "./gestorApp/EnviarConvite";
import CadastroPrefeitura from "./CadastroPrefeitura"
import RedefinirSenha from "./RedefinirSenha";
import DadosGerais from "./prefeitura/DadosGerais"
import Login from "./Login";
import Home from './prefeitura/Home'
const Rotas = () => {
   return(
       <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dadosgerais" element={<DadosGerais />} />
            <Route exact path="/redefinirsenha" element={<RedefinirSenha />} />
            <Route exact path="/cadastroprefeitura" element={<CadastroPrefeitura />} />
            <Route path="/login" element={<Login />} />
            <Route path="/EnviarConvite" element={<EnviarConvite />} />
        </Routes>
       </Router>
   )
}

export default Rotas; 