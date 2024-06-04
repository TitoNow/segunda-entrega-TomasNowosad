import React from 'react'
import { Link } from 'react-router-dom'
import Contador from "./Contador";

export const Item = ( {producto} ) => {
  return (
    <div className="producto">
      <img src={producto.imagen} />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <p>En Stock: {producto.stock}</p>
      <Contador />
      <Link to={`/item/${producto.id}`} class="boton-vermas">Ver más</Link>
    </div>
  )
}
