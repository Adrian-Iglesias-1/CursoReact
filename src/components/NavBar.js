import React from 'react'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'



function Navbar() {
    return ( 
      <header id="main-header">
       
          
            <h1>Titulo</h1>
            <Nav
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav> 

        <CartWidget/>
        </header>
    )
}

export default Navbar
