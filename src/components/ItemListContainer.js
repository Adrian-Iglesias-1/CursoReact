import React from 'react'
import { Fragment } from 'react'

function ItemListContainer(props) {

    return (
        <Fragment>
          <h2>
            Lista de Hardware:  {props.hardware} {props.precio}
          
          </h2>
        </Fragment>
    )
}

export default ItemListContainer
