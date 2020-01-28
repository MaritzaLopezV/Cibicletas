import React, { Component } from 'react';
import { db } from "./services/FirebaseConfig";
class Bodega extends Component {
    state = {
        items:[]
      }
  
      componentDidMount() {
        db.collection("Pedidos").onSnapshot((snapshot)=>{
          this.setState({
            items:snapshot.docs.map(doc=>{
              return{id:doc.id,data:doc.data()}
            })
          })
        },error=>{
          console.log(error)
        })
        
      }
  
      deletePedido = (id) => {
        db.collection("Pedidos").doc(id).delete();  
      }

    render() {
        const {items} = this.state;
        return (
            <div className="container mb-5">
        <h1>Productos</h1>
        <hr></hr>
        <table className="table table-hover mb-5">
          <thead>
            <tr className="table-active">
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">Hora</th>
              <th scope="col">Stock</th>
              <th scope="col">Accion</th>
            </tr>
          </thead>
          <tbody>
          {items && items !== undefined
              ? items.map((items, key) => {
                  return (
                    <tr key={key} className="table-dark">
                      <th scope="row">{key + 1}</th>
                      <td>{items.data.id}</td>
                      <td>{items.data.hora}</td>
                      <td>{items.data.stock}</td>
                      <td>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button
                            type="button"
                            onClick={() => this.deletePedido(items.id)}
                            className="rounded-right btn btn-danger"
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
        <div>
          <hr></hr>
        </div>
      </div>
        );
    }
}

export default Bodega;