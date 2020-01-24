import React, { Component } from "react";
import firebase from "firebase";
import { db, auth } from "./services/FirebaseConfig";
class Productos extends Component {
  state = {
    productos: null
  };

  componentDidMount() {
    console.log("mounted");
    db.collection("Productos")
      .get()
      .then(snapshot => {
        const productos = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          productos.push(data);
        });
        this.setState({ productos: productos });
        console.log(snapshot);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="container mb-5">
        <h1>Productos</h1>
        <hr></hr>
        <table className="table table-hover mb-5">
          <thead>
            <tr className="table-active">
              <th scope="col">Nombre</th>
              <th scope="col">Categoria</th>
              <th scope="col">Stock</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
            {this.state.productos &&
              this.state.productos.map(productos => {
                return (
                  <tr>
                    <th scope="row">{productos.name}</th>
                    <td>{productos.category}</td>
                    <td>{productos.stock}</td>
                    <td>
                        <button className="btn btn-primary">Pedir</button>
                        </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div>
            <hr></hr>
        </div>
      </div>
    );
  }
}

export default Productos;
