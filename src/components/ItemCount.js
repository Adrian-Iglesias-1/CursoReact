import { Button } from "react-bootstrap"
import React, { useState } from "react";


function ItemCount({ stock, inicial, onAdd }) {
  const [contador, setContador] = useState(inicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const agregar = () => {
    if(stock > 0){
    onAdd(contador)
  }
};


  return (
    <>
      <p>Contador {contador}</p>
      <Button onClick={restar} variant="danger">
        -
      </Button>
      <Button onClick={sumar} variant="primary">
        +
      </Button>{" "}
      <Button disabled={stock>0 ? false:true} onClick={agregar} variant="outline-success">
        Agregar al carrito
      </Button>
      {"  "}
    </>
  );
}

export default ItemCount;

