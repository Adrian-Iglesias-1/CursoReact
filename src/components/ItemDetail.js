const ItemDetail = ({productos}) => {
  console.log(productos)
  return (
     
      <>

        <ul>         
          <li>{productos.title}</li>
          <li>{productos.cpu}</li>
          <li>{productos.descripcion}</li>
          <img src= {productos.picture}/>
        </ul>
      </>
    );
}
 
export default ItemDetail;

