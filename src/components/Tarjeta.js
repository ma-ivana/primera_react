import React from 'react';


const Tarjeta = props => {
return (
  <div className="card">
    <img alt={props.alt} src={props.imagen}/>
      <div className="info">
        <h5>{props.nombre}</h5>
        <h5>Precio: ${props.precio}</h5>
      </div>
  </div>
)
};

export default Tarjeta;