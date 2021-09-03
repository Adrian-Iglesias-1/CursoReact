import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from './components/ItemListContainer';

import ItemDetailContainer from './components/ItemDetailContainer';






function App() {
    
    return(
       <>
        <NavBar  />
        <ItemListContainer />
        <ItemDetailContainer/>
       
        
       </>
    )
}

export default App
