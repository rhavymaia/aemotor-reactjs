import Inicio from "views/gestorApp/Inicio";
import SolicitacoesPrefeitura from "views/gestorApp/SolicitacoesPrefeitura";
import EnviarConvite from "views/gestorApp/EnviarConvite";
import PrefeiturasCadastradas from "views/gestorApp/PrefeiturasCadastradas";

const routesGestor = [
  {
    path: "/inicio",
    name: "Início",
    icon: "nc-icon nc-grid-45 ",
    component: Inicio,
    layout: "/gestor",
  },
  {
    path: "/enviarconvite",
    name: "Enviar Convite",
    icon: "nc-icon nc-email-85 ",
    component: EnviarConvite,
    layout: "/gestor",
  },
  {
    path: "/listarprefeituras",
    name: "Exibir Prefeituras",
    icon: "nc-icon nc-bank ",
    component: PrefeiturasCadastradas,
    layout: "/gestor",
  },
  {
    path: "/solicitacoesprefeitura",
    name: "Ver Solicitações ",
    icon: "nc-icon nc-bullet-list-67 ",
    component: SolicitacoesPrefeitura,
    layout: "/gestor",
  },
];

export default routesGestor;
