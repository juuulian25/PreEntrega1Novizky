/* ###############################
    Importaciones
##################################*/

//modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";


//estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//componentes
//import App from './App';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';

//WebVitals

import reportWebVitals from './reportWebVitals';
import AboutUs from './components/aboutUs/AboutUs';
import ItemListBBDD from './components/itemListBBDD/ItemListBBDD';
import Carrito from './components/carrito/Carrito';

/* #############################
    Logica
################################*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <NavBar saludo="Hola"
        despedida= "Adios"
      />

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/itemListBBDD' element={<ItemListBBDD/>}></Route>
        <Route exact path='/productos' element={<ItemListContainer greeting= "HOLA MUNDO"></ItemListContainer>}></Route>
        <Route exact path='/aboutUs' element={<AboutUs/>}></Route>
        <Route exact path='/producto/:productoId' element={<ItemDetailContainer/>}></Route>
        <Route exact path='/carrito' element={<Carrito/>}></Route>
      </Routes>


      
      

      <Footer></Footer>

    </BrowserRouter>

    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
