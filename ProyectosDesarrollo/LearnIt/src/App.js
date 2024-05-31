import React from 'react';
import './App.css';
import MenuPrincipal from './components/MenuPrincipal';
import CursosDisponibles from './components/CursosDisponibles';
import BotonIngresar from './components/BotonIngresar';
import Login from './components/Login';
import Temporizador from './components/Temporizador';
import Curso from './components/Curso';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <MenuPrincipal/>
        <br/>
        <CursosDisponibles/>
        <br/>
        <Temporizador/>
        <br/>
      </header>
    </div>
  );
}

export default App;