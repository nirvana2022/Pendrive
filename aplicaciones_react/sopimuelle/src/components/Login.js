import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"; // Asegúrate de importar el archivo CSS
import BotonIngresar from './BotonIngresar';

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="container-login">
            <form>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label label-custom-color">Usuario</label>
                <input type="text" id="usuario" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label label-custom-color">Contraseña</label>
                <input type="password" id="contrasena" className="form-control" />
              </div>
            </form>
            <br></br>
            <BotonIngresar/>
            <br></br>
            <a href="...">Restablecer contraseña</a>
          </div>
        </div>
      </div>
    </div>
  );
}