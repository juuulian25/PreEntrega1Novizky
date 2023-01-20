/* ###############################
    Importaciones
##################################*/
import { Link } from "react-router-dom";

import "./NavBar.css"
import CardWidget from "../cardWidget/CardWidget"
//import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Table } from "bootstrap/dist/css/bootstrap.min.css";
import AboutUS from "../aboutUs/AboutUs"


/* ###############################
    Logica
##################################*/
const NavBar = (props) => { //funcion constructora

    const fecha = new Date()
    const fechaString = `La fecha de hoy es ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} `
    //retorno que se va a renderizar
    return (
        <header>
            <nav className="navBar">
          
                <li><Link to="/">Home</Link></li>
                <li><Link to="/items">Productos</Link></li>
                <li><Link to="/aboutUs">Nosotros</Link></li>
                <p>Te saludo: {props.saludo}</p>
                
               
                <CardWidget cantidad= "10"></CardWidget>
                <p>{fechaString}</p>
        
            </nav>
        </header>
   
    )
}
/*
function FillExample() {
    return (
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
  */

/* ###############################
    Exportaciones
##################################*/

export default NavBar
