import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./estilos.css"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';






function App() {
    
    return(
        <BrowserRouter>
        
        <NavBar  />
        <main>

        <Switch>

            <Route path="/" component={ItemListContainer} exact/>
            <Route path="/category/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer} />

        </Switch>
        </main>
       
        
        {/*<ItemListContainer />
        <ItemDetailContainer/>*/}
       
       
        </BrowserRouter>
       
    )
}


export default App
