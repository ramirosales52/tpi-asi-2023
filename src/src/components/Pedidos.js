import React, { useEffect, useRef, useState } from 'react'
import './styles/pedidos.css'
import axios from 'axios';
import {Pagination} from "@nextui-org/react";

function Pedidos() {
  
  const [pedidos, setPedidos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const [posts] = useState(Array.from({ length: 10 }, (_, i) => (i + 1) * 4));
  const pedidosRef = useRef(null);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    if (pedidosRef.current) {
      pedidosRef.current.scrollTop = 0;
    }
  };
  
  const handlePostsPerPageChange = (value) => {
    setPostsPerPage(value);
    setCurrentPage(1); 
    if (pedidosRef.current) {
      pedidosRef.current.scrollTop = 0;
    }
  };

  const getPedidos = async () => {
    const res = await axios.get('http://localhost:3001/pedidos')
    setPedidos(res.data)
  }

  useEffect(() => {
    getPedidos()
  },[])

  console.log(pedidos)

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  const lastIndex = currentPage * postsPerPage
  const firstIndex = lastIndex - postsPerPage
  const currentPosts = pedidos.slice(firstIndex, lastIndex)

  if (!pedidos.length) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='pedidos flex flex-col justify-between overflow-hidden'>
      <div className='p-3 h-auto flex flex-col gap-3 max-h-full overflow-auto' ref={pedidosRef}> 
        {currentPosts.map((item, index) => (
          <div key={index} className="flex bg-white p-4 rounded-lg" style={{minHeight: '200px'}}>
            <div style={{flex: 1}}>
              <div className='flex justify-between'>
                <h5>Pedido <b>#{item.id}</b></h5>
                <h4><b>${item.precioTotal}</b></h4>
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <i className="fa-regular fa-calendar"/>
                <h6 style={{ margin: 0 }}>{new Date(item.fecha).toLocaleDateString(undefined, options)}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <footer className='h-auto p-3 m-0 border-t bg-white w-full flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <p>Resultados por página</p>
          <select defaultValue={4} className='select w-auto h-9' name='pages' onChange={(e) => handlePostsPerPageChange(e.target.value)}>
            {posts.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
        </div>
        <Pagination isCompact showControls total={Math.ceil(pedidos.length / postsPerPage)} initialPage={currentPage} onChange={handlePageChange}/>
      </footer>
    </div>
  )
}

export default Pedidos