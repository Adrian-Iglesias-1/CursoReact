import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from './components/ItemListContainer';







function App() {
    
    return(
       <>
        <NavBar  />
        <ItemListContainer hardware= "placa de videos nvidia 1070" precio= {50000}/>
        
       
        
       </>
    )
}

export default App
