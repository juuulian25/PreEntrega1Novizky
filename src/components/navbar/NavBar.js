/* ###############################
    Importaciones
##################################*/
import { Link } from "react-router-dom";

import "./NavBar.css"
import CardWidget from "../cardWidget/CardWidget"
//import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table } from "bootstrap/dist/css/bootstrap.min.css";



/* ###############################
    Logica
##################################*/
const NavBar = (props) => { //funcion constructora

    const fecha = new Date()
    const fechaString = `La fecha de hoy es: ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} `
    //retorno que se va a renderizar
    return (
        <header>
            <nav className="navBar">
          
                <li><Link to="/">Home</Link></li>
                <li><Link to="/itemListBBDD">ProductosBBDD</Link></li>
                <li><Link to="/productos">ProductosAPY</Link></li>
                <li><Link to="/aboutUs">Nosotros</Link></li>                
                <li><Link to="/carrito">Carrito</Link></li>
                <p>Te saludo: {props.saludo}</p>
                
                <p>{fechaString}</p>
        
            </nav>
        </header>
   
    )
}


/* ###############################
    Exportaciones
##################################*/

export default NavBar
