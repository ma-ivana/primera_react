import React from 'react';
import './App.css';
import Tarjeta from './components/Tarjeta';
import living from './img/silla.jpg';
import sillon from './img/sillon.jpg';
import sillones from './img/sillones.jpg';



const App = () => {
  return (
    <div className="main">
    <Tarjeta nombre="Living nórdico" precio="8000" imagen={living} alt="Imagen de una silla y una mesa"/>
    <Tarjeta nombre="Sillón con almohadones" precio="7000" imagen={sillon} alt="Imagen de un sillón en L"/>
    <Tarjeta nombre="Sillones" precio="5000" imagen={sillones} alt="Imagen de dos sillones amarillos"/>
    </div>
  )
  };

export default App;
