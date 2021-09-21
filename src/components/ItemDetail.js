import { useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { contexto } from './CartContext';
import { useContext } from "react";

const ItemDetail = ({productos}) => {

  const [button, setButton] = useState(false)
  
  const {addProducto} = useContext(contexto);
  

   const onAdd = (cantidad) => {
    setButton(true)
    const producto_formateado = {...productos,cantidad}
    
    addProducto(producto_formateado)
    
    
 
   }

  
  return (
    <>
      <h1>{productos.title}</h1> 
      <h2>{productos.cpu} - ${productos.price}</h2>
      <p>{productos.descripcion}</p>
      <img src={productos.picture} />
        
      {button ? <Link to="/cart"><Button className="mt-5">Ir al carro</Button></Link> :  <ItemCount  inicial ={1} stock={productos.stock} onAdd={(onAdd)} />} 
      </>
     
  );
  }
 
export default ItemDetail;

