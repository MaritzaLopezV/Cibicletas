import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <a className="navbar-brand" href="#">Cibicletas</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href={'/'}>Inicio <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Productos">Productos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Clientes">Clientes</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Clientes">Servicio Tecnico</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Clientes">Ingresar</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Clientes">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Nav;