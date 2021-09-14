
import React from 'react'
import { Link } from 'react-router-dom'








function Item({nombre, id}){
    
    console.log(nombre)
    return (
        
        <article className ="catalogo-item"> 
            
            <li>{nombre}</li>
            <Link to={`/item/${id}`}>Ver mas</Link>
        </article>
    )
}

export default Item

