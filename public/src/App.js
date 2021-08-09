import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';


//todos los componentes importados.
import Navbar from './components/navbar';
import Productos from './components/products/productos';
import Productsaved from './components/products/productSaved';
// function madre donde desde aca vamos a cada ruta de componente.
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Route exact path="/products" component = {Productos} />
      <Route exact path="/products/saved/:id/:nombre" component={Productsaved}/>
    </Router>
  );
}

export default App;
