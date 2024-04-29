import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Aimé Accesorios</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Listado Completo</Link></li>
            <li><Link className="menu-link" to="/productos/carteras">Carteras</Link></li>
            <li><Link className="menu-link" to="/productos/billeteras">Billeteras</Link></li>
            <li><Link className="menu-link" to="/productos/bijou">Bijouterie</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros </Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar;