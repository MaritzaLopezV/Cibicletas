import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Productos from "./Productos";
import ServicioTecnico from "./ServicioTecnico";
import Bodega from "./Bodega";
import Login from "./Login";
import AgregarProductos from "./AgregarProductos";
import Reparaciones from "./Reparaciones";



class Nav extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <Link className="navbar-brand" to={"/"}>
                Cibicletas
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarColor01"
                aria-controls="navbarColor01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/"}>
                      Inicio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/AgregarProductos"}>
                      Agregar Productos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Productos"}>
                      Productos
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Bodega"}>
                      Bodega
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/Reparaciones"}>
                      Reparacion
                    </Link>
                  </li>
                </ul>
                <Login/>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Productos">
              <Productos />
            </Route>
            <Route path="/ServicioTecnico">
              <ServicioTecnico />
            </Route>
            <Route path="/Bodega">
              <Bodega />
            </Route>
            <Route path="/AgregarProductos">
              <AgregarProductos />
            </Route>
            <Route path="/Reparaciones">
              <Reparaciones />
            </Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default Nav;
