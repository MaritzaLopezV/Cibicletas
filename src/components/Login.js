import React, { Component } from "react";
import firebase from "firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => console.log(`${result.user.email}: ha iniciado sesion`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(result => console.log(`${result.user.email}: ha salido`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  renderLogin() {
    if (this.state.user) {
      return (
        <div className="btn-group" role="group">
          <img
            src={this.state.user.photoURL}
            style={{ height: "2.5em" }}
            alt={this.state.user.displayName}
            className="rounded-left"
          />
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop1"
              type="button"
              className="btn btn-light"
              to={"#"}
            >
              {this.state.user.displayName}
            </button>
          </div>
          <div className="btn-group" role="group">
            <button
              id="btnGroupDrop4"
              type="button"
              className="btn btn-light bg-light dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            ></button>
            <div
              className="dropdown-menu bg-light"
              aria-labelledby="btnGroupDrop4"
            >
              <a
                className="dropdown-item bg-light"
                href={'/AgregarProductos'}
              >
                Agregar Productos
              </a>
              <button
                className="dropdown-item bg-light"
                onClick={this.handleLogOut}
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <button className="btn btn-success" onClick={this.handleAuth}>
          Ingresar
        </button>
      );
    }
  }

  render() {
    return (
      <div className="nav-item">
        {this.renderLogin()}
        <ul></ul>
      </div>
    );
  }
}

export default Login;
