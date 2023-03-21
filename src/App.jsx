import React from 'react';
import './App.css';
import { Formulario } from './components/Formulario';
import { Ejemplo } from './components/Ejemplo';
 
function App() {

  return (
    <div className="App">

      <Ejemplo/>

      <hr />

      <Formulario />

    </div>
  )
}

export default App
