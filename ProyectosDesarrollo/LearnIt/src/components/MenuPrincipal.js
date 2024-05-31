import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MenuPrincipal() {
  return (
    <header className="menu">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="ms-2 titulo-navegacion-color">LEARN-IT</span>
          </div>
          <div className="d-flex">
            <button type="button" className="btn btn-dark">
              INSCRIBIRSE
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}