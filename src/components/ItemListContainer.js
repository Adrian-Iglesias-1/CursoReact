import React from 'react'
import { Fragment } from 'react'
import ItemCount from './ItemCount'

function ItemListContainer(props) {

    return (
        <Fragment>
          <h2>
            Lista de Hardware:  {props.hardware} {props.precio}
          
          </h2>
          <ItemCount inicial ={0} stock={5} onAdd={(cantidad)=>{console.log(cantidad)}}/> 
        </Fragment>
        
    )
        
    
}

export default ItemListContainer
