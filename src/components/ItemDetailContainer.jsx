import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from "../data/productos.json";

const ItemDetailContainer = () => {

    let { itemId } = useParams();
    

    useEffect(() => {
        setProducto(data.find((prod) => prod.id === parseInt(itemId)));
    }, [itemId])
    

  return (
    <div class="producto-info">
        <h2>{producto ? producto.nombre: "Cargando..."}</h2>
        <img src={producto ? producto.imagen: "Cargando..."} />
        <h3>${producto ? producto.precio: "Cargando..."}</h3>
        <h3>{producto ? producto.descripcion: "Cargando..."}</h3>
        <h3>En Stock: {producto ? producto.stock: "Cargando..."}</h3>
    </div>
  )
}

export default ItemDetailContainer