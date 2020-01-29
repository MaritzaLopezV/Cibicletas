import React, { Component } from "react";
import swal from "sweetalert";
import firebase from "firebase";
import { db } from "./services/FirebaseConfig";

class Reparaciones extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      cliente: "",
      tipo: "",
      descripcion: "",
      status: "",
      costo: ""
    };
  }

  updateInput = e => this.setState({ [e.target.name]: e.target.value });

  addReparacion = e => {
    swal("Reparacion ingresada");
    e.preventDefault();
    const db = firebase.firestore();
    db.collection("Reparaciones").add({
      cliente: this.state.cliente,
      tipo: this.state.tipo,
      descripcion: this.state.descripcion,
      costo: this.state.costo,
      status: "Enviado",
      email: this.state.email
    });
    this.setState({
      email: "",
      cliente: "",
      tipo: "",
      descripcion: "",
      costo: ""
    });
  };
  componentDidMount() {
    db.collection("Reparaciones").onSnapshot(
      snapshot => {
        this.setState({
          items: snapshot.docs.map(doc => {
            return { id: doc.id, data: doc.data() };
          })
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  rmTaller(status) {
    swal("Proceso", status);
  }
  rmTerminado(status) {
    swal("Proceso", "Terminado");
  }
  rmCancelado(status) {
    swal("Proceso", "Cancelado");
  }

  render() {
    const { items } = this.state;
    return (
      <div className="container mb-5">
        <h1>Reparaciones y Mantenciones</h1>
        <hr />
        <div className="container">
          <form onSubmit={this.addReparacion}>
            <fieldset className="col-6">
              <div className="form-group">
                <label>Email address</label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingresar correo"
                  onChange={this.updateInput}
                  value={this.state.email}
                />
                <small className="form-text text-muted">
                  Se utilizara para dar informacion del termino de la reparacion
                  o mantencion
                </small>
              </div>
              <div className="form-group">
                <label>Nombre completo</label>
                <input
                  name="cliente"
                  type="text"
                  className="form-control"
                  onChange={this.updateInput}
                  value={this.state.cliente}
                />
              </div>

              <div className="form-group">
                <label>Reparacion o mantencion</label>
                <select
                  name="tipo"
                  className="form-control"
                  id="exampleSelect1"
                  onChange={this.updateInput}
                  value={this.state.tipo}
                >
                  <option defaultValue>-----</option>
                  <option>Reparacion</option>
                  <option>Mantencion</option>
                </select>
              </div>
              <div className="form-group">
                <label>Descripcion</label>
                <textarea
                  name="descripcion"
                  className="form-control"
                  rows="10"
                  onChange={this.updateInput}
                  value={this.state.descripcion}
                ></textarea>
              </div>
              <div className="form-group">
                <label>Costo</label>
                <input
                  name="costo"
                  type="text"
                  className="form-control col-4"
                  onChange={this.updateInput}
                  value={this.state.costo}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
        <hr />
        <div className="container">
          <h3>Listado taller</h3>
          <hr />
          <table className="table table-hover">
            <thead>
              <tr className="table-primary">
                <th>#</th>
                <th>Cliente</th>
                <th>Contacto</th>
                <th>Tipo</th>
                <th>Costo</th>
                <th>Status</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>
              {items && items !== undefined
                ? items.map((items, key) => {
                    return (
                      <tr key={key} className="table-dark">
                        <th scope="row">{key + 1}</th>
                        <td>{items.data.cliente}</td>
                        <td>{items.data.email}</td>
                        <td>{items.data.tipo}</td>
                        <td>{items.data.costo}</td>
                        <td>{items.data.status}</td>
                        <td>
                          <div
                            className="btn-group"
                            role="group"
                            aria-label="Basic example"
                          >
                            <button
                              type="button"
                              onClick={() => this.rmTaller(items.data.status)}
                              className="rounded-left btn btn-success"
                            >
                              En Taller
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                this.rmTerminado(items.data.status)
                              }
                              className="rounded-0 btn btn-primary"
                            >
                              Terminado
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                this.rmCancelado(items.data.status)
                              }
                              className="rounded-right btn btn-danger"
                            >
                              Cancelar
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Reparaciones;
