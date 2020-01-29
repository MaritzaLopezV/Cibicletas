import React, { Component } from "react";
import { db } from "./services/FirebaseConfig";
import swal from 'sweetalert';
class Productos extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    db.collection("Productos").onSnapshot((snapshot)=>{
      this.setState({
        items:snapshot.docs.map(doc=>{
          return{id:doc.id,data:doc.data()}
        })
      })
    },error=>{
      console.log(error)
    })
  }

  deleteProduct = (id) => {
    swal("Producto eliminado")
    db.collection("Productos").doc(id).delete();
  }
  pedirProducto = (id) => {
    const timestamp = Date.now(); // This would be the timestamp you want to format
    const hora = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
    db.collection("Pedidos").add({id,hora});
    swal("Producto solicitado");
  }


  
  render() {
    const { items } = this.state;
    return (
      <div className="container mb-5">
        <h1>Productos</h1>
        <hr></hr>
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th>#</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Stock</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {items && items !== undefined
              ? items.map((items, key) => {
                  return (
                    <tr key={key} className="table-dark">
                      <th scope="row">{key + 1}</th>
                      <td>{items.data.name}</td>
                      <td>{items.data.category}</td>
                      <td>{items.data.stock}</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            onClick={() => this.deleteProduct(items.id)}
                            className="rounded-0 btn btn-danger"
                          >
                            Eliminar
                          </button>
                          <button
                            type="button"
                            onClick={() => this.pedirProducto(items.id)}
                            className="rounded-right btn btn-primary"
                          >
                            Pedir
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
    );
  }
}

export default Productos;
