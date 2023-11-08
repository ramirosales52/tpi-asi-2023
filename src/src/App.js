import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  // const res = await fetch('http://192.168.0.244:3001/pedidos')
  
  useEffect(() => {
    const getData = async() => {
        const result = await axios.get('http://localhost:3001/pedidos')
          setPedidos(result.data)
        }
        getData()      
      },[])
      
      const getProductos = async (id) => {
        const result = await axios.get(`http://localhost:3001/pedido/productos/${id}`)
        console.log(result.data)
        setProductos(result.data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          width:'100%',
          display:'flex',
          justifyContent:'space-around'
        }}>
          <div>
            {pedidos.map((item, index)=> (
              <div key={index} style={{
                backgroundColor:'green',
                display:'flex',
                
              }}>
                <button onClick={() => getProductos(item.id)}><h3>P #{item.id}</h3></button>
                <h6>{item.fecha}</h6>
                <h6>{item.precioTotal}</h6>
              </div>
            ))}
          </div>
          <div>
            {productos.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex'
              }}>
                <h6>{item.itempedido_id}</h6>
                <h6>{item.product_name}</h6>
                <h6>${item.price}</h6>
                <h6>x{item.quantity}</h6>
                <h6>${item.subtotal}</h6>
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
