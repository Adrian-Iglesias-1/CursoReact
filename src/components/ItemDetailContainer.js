
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { resolve } from "promise";

/*{id: 1, title:"Procesador", cpu:"AMD Ryzen 7", 
                descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles MD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",
                picture:"https://http2.mlstatic.com/D_NQ_NP_920739-MLA44347283255_122020-O.webp"}, 
                {id: 2, title:"Procesador", cpu:"Intel I7", 
                descripcion: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.",
                picture:"https://http2.mlstatic.com/D_NQ_NP_600668-MLA43003993305_082020-O.webp"}*/
const ItemDetailContainer = () => {

    const [producto,setProducto] = useState([])
   
    const {id} =useParams()

   console.log(id)
   
    
    useEffect (()=>{

     
       
        const promesa2 = new Promise ((response,resolve) =>{
           
            
           
            setTimeout(() =>{
                console.log("termine el pedido")
                response([{id: 1, title:"Procesador", cpu:"AMD Ryzen 7", 
                descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles MD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",
                picture:"https://http2.mlstatic.com/D_NQ_NP_920739-MLA44347283255_122020-O.webp"}, 
                {id: 2, title:"Procesador", cpu:"Intel I7", 
                descripcion: "Productividad y entretenimiento, todo disponible en tu computadora de escritorio. La superioridad tecnológica de INTEL es un beneficio para todo tipo de profesionales. Asegura el mejor rendimiento de las aplicaciones, de la transferencia de datos y la conexión con otros elementos tecnológicos.",
                picture:"https://http2.mlstatic.com/D_NQ_NP_600668-MLA43003993305_082020-O.webp"}]) 
            },2000)},
             [id])
       
     
           
        promesa2.then((arr) =>{
            
            let filtro
            if (id){
            filtro = arr.find((item)=> (item.id) === parseInt(id))
             
            setProducto(filtro)}
              
          
        })
        })

    
    
    return ( 
        <ItemDetail productos={producto} />
    );
    
}
 
export default ItemDetailContainer;