import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [producto,setProducto] = useState({})

    useEffect(() => {
        console.log("Aca tengo una promesa que tambien dura 2 segundos y obtengo un objeto con los detalles del producto")

        setTimeout(()=>{
            setProducto({title:"Procesador", cpu:"AMD Ryzen 7", 
            descripcion: "Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles MD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",
            url:"https://http2.mlstatic.com/D_NQ_NP_846590-MLA43418472875_092020-O.webp"
            })
        },2000)

    }, [])


    return ( 
        <ItemDetail producto={producto} />
    );
}
 
export default ItemDetailContainer;