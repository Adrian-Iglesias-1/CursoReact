import React from 'react'
import Item from './Item'


function ItemList( {items} ) {
    
    console.log(items)

   

  
    return (

        
        <>
        
        {items.map(item => <Item id={item.id} nombre={item.picture} />)}
        
        
       
   
            
            
      
            
       
        </>
    )
   
}

export default ItemList
