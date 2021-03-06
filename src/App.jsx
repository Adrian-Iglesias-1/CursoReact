import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CustomProvider from './components/CartContext';






function App() {
    
    return(
        <BrowserRouter>
        <CustomProvider>
        <NavBar  />
        <main>

        <Switch>
            
            <Route path="/" component={ItemListContainer} exact/>
            <Route path="/category/:id" component={ItemListContainer} exact/>
            <Route path="/item/:id" component={ItemDetailContainer} exact/>
           

        </Switch>
      
        </main>
        </CustomProvider>
        
       
        </BrowserRouter>
       
    )
}


export default App
