import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>Carpishop</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Listado completo</Link></li>
            <li><Link className="menu-link" to="/todos">Listadp Completo</Link></li>
            <li><Link className="menu-link" to="/todos/Carteras">Carteras</Link></li>
            <li><Link className="menu-link" to="/todos/Billeteras">Billeteras</Link></li>
            <li><Link className="menu-link" to="/todos/bijouterie">Bijouterie</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar