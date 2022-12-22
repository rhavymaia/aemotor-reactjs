/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 202xc2 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import GestorAppNavbar from "components/Navbars/GestorAppNavbar.js";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routesGestor from "routesGestor.js";

import sidebarImage from "assets/img/sidebar-3.jpg";

function GestorApp() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("orange");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routesGestor) => {
    return routesGestor.map((prop, key) => {
      if (prop.layout === "/gestor") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} routes={routesGestor} />
        <div className="main-panel" ref={mainPanel}>
          <GestorAppNavbar />
          <div className="content">
            <Switch>{getRoutes(routesGestor)}</Switch>
          </div>
          <Footer />
        </div>
      </div>

    </>
  );
}

export default GestorApp;
