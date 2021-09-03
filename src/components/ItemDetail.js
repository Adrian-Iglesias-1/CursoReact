const ItemDetail = ({producto}) => {
    return (
      <>
        <ul>
          <li>{producto.title}</li>
          <li>{producto.cpu}</li>
          <li>{producto.descripcion}</li>
          <img src="https://http2.mlstatic.com/D_NQ_NP_846590-MLA43418472875_092020-O.webp"></img>
        </ul>
      </>
    );
}
 
export default ItemDetail;

