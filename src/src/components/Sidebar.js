import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './styles/sidebar.css'

function Sidebar() {

  const location = useLocation()

  return (
    <div className='sidebar'>
      <Link to='/pedidos'>
          <div className={location.pathname === '/pedidos' ? "active" : "menuitem"}>
              <i className="fa-solid fa-house"/>
              Pedidos
          </div>
      </Link>
      <Link to='/productos'>
          <div className={location.pathname === '/productos' ? "active" : "menuitem"}>
              <i className="fa-solid fa-house"/>
              Productos
          </div>
      </Link>
    </div>
  )
}

export default Sidebar