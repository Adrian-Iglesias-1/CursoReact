
import React from 'react'







function Item({id, nombre}){
    console.log(id)
    console.log(nombre)
    return (
        
        <>  
            
            <li>{nombre}</li>
        </>
    )
}

export default Item

