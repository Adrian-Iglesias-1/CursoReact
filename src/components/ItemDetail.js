import { useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


const ItemDetail = ({productos}) => {

  const [button, setButton] = useState(false)

   const onAdd = (cantidad) => {
    console.log(cantidad)
    setButton(true)
    
 
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

