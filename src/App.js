import React, { Fragment } from 'react';
import './bootstrap.min.css';

function App() {
  return (
    <Fragment>
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
      <div className="container p-3">
        <div className="card mb-3">
          <h3 className="card-header">Card header</h3>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <h6 className="card-subtitle text-muted">Support card subtitle</h6>
          </div>

          <div className="d-flex justify-content-center">
            <img style={{ height: '200px', width: '200px' }} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
          </div>

          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <div className="card-body">
            <a href="#" className="card-link">Card link</a>
            <a href="#" className="card-link">Another link</a>
          </div>
          <div className="card-footer text-muted">
            2 days ago
        </div>
        </div>
      </div>
      <div className="container p-3">
        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Quienes somos</h5>
          </div>
          <p className="mb-1">Cibicletas es una empresa joven con 8 años de intenso trabajo en el mundo del motociclismo respaldado por un equipo de trabajo multidisciplinario con vasta experiencia en el mercado y enfocado en las necesidades individuales de todos nuestros clientes.</p>
          <p className="mb-1">Atendiendo la constante necesidad de crecimiento incorporamos el área de Bicicletas de competición, enfocándonos principalmente en descenso y enduro.</p>
        </a>
      </div>
    </Fragment>
  );
}

export default App;
