import { createContext, useState } from "react";



export const contexto = createContext()

const {Provider} = contexto

const CustomProvider = ({children})=>{

    const [carrito, setCarrito] = useState([])


 
    const addProducto = (producto)=>{
        if(isInCart(producto.id)){
            carrito.forEach(item=> 
               item.id === producto.id ? item.cantidad += producto.cantidad : null
         );
         console.log(producto) 
           
        }else{
            setCarrito([...carrito, producto])
        }
    }
    
    const removeProducto =(id)=>{
        const nuevo_carrito = carrito.filter(producto => producto.id !== id)
        setCarrito(nuevo_carrito)
    }

    const clear =()=>{
        setCarrito([])
    }
    const isInCart=(id)=>{
        return carrito.find(producto => producto.id === id)
    }


    const contexto ={
        carrito,
        addProducto,
        removeProducto, 
        clear,
        isInCart
    }
    return(
        <Provider value={contexto}>
       {children}
       </Provider>
    )
}

export default CustomProvider