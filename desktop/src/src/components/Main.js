import React from 'react'
import './styles/main.css'
import { useLocation } from 'react-router-dom'


import Sidebar from './Sidebar'
import Pedidos from './Pedidos'
import Header from './Header'
import Productos from './Productos'


function Main() {

  const location = useLocation()

  return (
    <div className='main'>
      <Sidebar />
      <div className='mainContent'>
        <Header />
        {location.pathname === '/pedidos' ? (
          <Pedidos />
        ) : null}
        {location.pathname === '/productos' ? (
          <Productos />
        ) : null}
      </div>
    </div>
  )
}

export default Main