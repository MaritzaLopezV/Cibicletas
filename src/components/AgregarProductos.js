import React, { Component } from "react";
class AgregarProductos extends Component {
  render() {
    return (
      <div className="container mb-5">
        <h1>Agregar Productos</h1>
        <hr />
        <form>
          <fieldset>
            <div class="form-group">
              <label for="exampleInputEmail1">Nombre producto</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
              />
              <small id="emailHelp" class="form-text text-muted">
                Este nombre se mostrara en el catalogo
              </small>
            </div>
            <div class="form-group">
              <label for="exampleSelect1">Categorias</label>
              <select class="form-control" id="exampleSelect1">
                <option>#</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Descripcion</label>
              <textarea
                class="form-control"
                id="exampleTextarea"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Imagen</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleInputFile"
                aria-describedby="fileHelp"
              />
              <small id="fileHelp" class="form-text text-muted">
                Solo 1 imagen por producto
              </small>
            </div>
            
            <button type="submit" class="btn btn-primary mb-5">
              Agregar
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AgregarProductos;
