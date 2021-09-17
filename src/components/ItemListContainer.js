import React from 'react'
import { Fragment } from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useEffect, useState } from 'react'





function ItemListContainer() {
    
    let [ items, setItems] = useState([])  
   
    

    useEffect (()=>{

        
       
        const promesa = new Promise ((res,b) =>{
           
                
           
            setTimeout(() =>{
                console.log("termine el pedido")
                res([{id:1, marca: "Amd"},
                     {id:2, marca: "Intel"}                          
            ]) },2000)
        }, [])
       
       
           
        promesa.then((productos) =>{
              
            setItems(productos)
            
          
        })
        })




 
    return (
        <Fragment>
          
        <ItemCount inicial ={0} stock={5} onAdd={(cantidad)=>{console.log(cantidad)}}/> 
         <ItemList items={items} />
        </Fragment>
        
    )
        
    
}

export default ItemListContainer
