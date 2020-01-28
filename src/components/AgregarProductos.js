import React, { Component } from "react";
import firebase from 'firebase';

class AgregarProductos extends Component {
  
  constructor() {
    super();
    this.state = {
      name: "",
      category: "",
      stock: ""
    };
  }
  
  updateInput = e => this.setState({[e.target.name]: e.target.value});
  
  addProduct = e => {

    e.preventDefault();
    const db = firebase.firestore();
    db.collection("Productos").add({
      name: this.state.name,
      category: this.state.category,
      stock: this.state.stock
    });
    this.setState({
      name: '',
      category: '',
      stock: ''
    });
    
  };

  render() {
    return (
      <div className="container">
        <h1>Agregar Productos</h1>
        <hr />
        <form onSubmit={this.addProduct}>
          <fieldset>
            <div className="form-group">
              <label>Nombre producto</label>
              <input
                name="name"
                type="text"
                className="form-control col-4"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={this.updateInput}
                value={this.state.name}
              />
              <small className="form-text text-muted">
                Este nombre se mostrara en el catalogo
              </small>
            </div>
            <div className="form-group">
              <label>Categorias</label>
              <select 
                name="category" 
                className="form-control col-4"
                onChange={this.updateInput}
                value={this.state.category}>
                <option defaultValue>-----</option>
                <option value="Accesorio">Accesorio</option>
                <option value="Componente">Componente</option>
              </select>
            </div>
            <div className="form-group">
              <label>Stock</label>
              <input
                type="text"
                name="stock"
                className="form-control col-4"
                aria-describedby="emailHelp"
                placeholder=""
                onChange={this.updateInput}
                value={this.state.stock}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Agregar producto
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AgregarProductos;
