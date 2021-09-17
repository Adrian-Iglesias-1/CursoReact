
import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'








function Item({nombre, id}){
    
    console.log(nombre)
    return (
        
        <article className ="catalogo-item"> 
            
            <h2>{nombre}</h2>
            <Link to={`/item/${id}`}><Button>Ver mas</Button></Link>
        </article>
    )
}

export default Item

