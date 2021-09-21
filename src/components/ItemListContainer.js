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
                res([{id:1, picture: "https://www.profesionalreview.com/wp-content/uploads/2014/08/amd-logo-2014.jpg"},
                     {id:2, picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh_apnzQgviLO_zA361pmUJ6588VQj-dR26bgkoMzXFTJ3FIXyumyTihE0tr70Uhez1g&usqp=CAU"}                          
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
