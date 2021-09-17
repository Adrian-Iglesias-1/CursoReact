import React from 'react'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'
import {Link, BrowserRouter} from 'react-router-dom'



function Navbar() {
  
    return (
      <header id="main-header">
        <Link to="/">
        <h1>CompuGamer</h1>
        </Link>
        <Nav>
     
          <Nav.Item>
          <Link to="/" className="nav-link">Inicio</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to={`/category/1`} className="nav-link">Componentes</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to="/category/2" className="nav-link">PC armardas</Link>
          </Nav.Item>
          
        </Nav>

        <CartWidget />
      </header>
    );
}

export default Navbar
