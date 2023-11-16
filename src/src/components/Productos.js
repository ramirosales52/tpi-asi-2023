import React, { useEffect, useState } from 'react'
import './styles/productos.css'
import axios from 'axios';

function Productos() {

  const [productos, setProductos] = useState([]);
  
  const getProductos = async () => {
    const res = await axios.get('http://localhost:3001/productos')
    setProductos(res.data)
  }

  useEffect(() => {
    getProductos()
  },[])

  return (
    <div className='productosContainer'>     
      <table className='table'>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Producto</th>
            <th scope="col">Precio</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {productos.map((item, index) => (
            <tr key={index}>
              <th scope='row'>{item.id}</th>
              <td>{item.nombre}</td>
              <td>${item.precio}</td>
              <td>
                <div className="botones">
                  <button className="btn btn-primary btn-sm">Consultar</button>
                  <button className="btn btn-secondary btn-sm">Modificar</button>
                  <button className="btn btn-outline-danger btn-sm">Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>   
    </div>
  )
}

export default Productos