import React, { Component } from "react";
import { db } from "./services/FirebaseConfig";
class Productos extends Component {
 

    state = {
      productos: null
    }

    componentDidMount() {
      db.collection("Productos").get().then((snapshot)=>{
        this.setState({
          productos:snapshot.docs.map(doc=>{
            return{
              id:doc.id,
              data:doc.data()
            }
          })
        })  
      },error=>{
        console.log(error)
      });
    }

    deleteProduct = (id) =>{
      db.collection("Productos").doc(id).delete();  
    }

    pedirProducto = (id) => {
      db.collection("Pedidos").add({id});
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
                    <th scope="row" key={productos.id}>{productos.name}</th>
                    <td>{productos.category}</td>
                    <td>{productos.stock}</td>
                    <td>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button type="button" onClick={this.pedirProducto(productos.id)} className="rounded-left btn btn-primary">
                          Pedir
                        </button>
                        <button type="button" onClick={()=>this.deleteProduct(productos.id)} className="rounded-right btn btn-danger">
                          Eliminar
                        </button>
                      </div>
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
