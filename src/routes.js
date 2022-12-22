/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Inicio from "views/prefeitura/Inicio.js";
import EditarPerfil from "views/prefeitura/EditarPerfil.js";
import Funcionarios from "views/prefeitura/Funcionarios";
import Veiculos from "views/prefeitura/Veiculos.js";
import Rotas from "views/prefeitura/Rotas.js";
import Estudantes from "views/prefeitura/Estudantes.js";
import InstituicaoDeEnsino from "views/prefeitura/InstituicaoDeEnsino.js";


const dashboardRoutes = [
  {
    path: "/inicio",
    name: "Início",
    icon: "nc-icon nc-grid-45 ",
    component: Inicio,
    layout: "/admin"
  },
  {
    path: "/editarperfil",
    name: "Editar Perfil",
    icon: "nc-icon nc-circle-09",
    component: EditarPerfil,
    layout: "/admin"
  },
  {
    path: "/veiculos",
    name: "Veículos",
    icon: "nc-icon nc-bus-front-12",
    component: Veiculos,
    layout: "/admin"
  },
  {
    path: "/rotas",
    name: "Rotas",
    icon: "nc-icon nc-square-pin",
    component: Rotas,
    layout: "/admin"
  },
  {
    path: "/funcionarios",
    name: "Funcionários",
    icon: "nc-icon nc-badge",
    component: Funcionarios,
    layout: "/admin"
  },
  {
    path: "/estudantes",
    name: "Estudantes",
    icon: "nc-icon nc-backpack",
    component: Estudantes,
    layout: "/admin"
  },
  {
    path: "/instituicaodeensino",
    name: "Instituição de Ensino",
    icon: "nc-icon nc-ruler-pencil",
    component: InstituicaoDeEnsino,
    layout: "/admin"
  },
  

];

export default dashboardRoutes;
