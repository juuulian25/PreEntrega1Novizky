/* ###############################
    Importaciones
##################################*/
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
    const fechaString = `La fecha de hoy es ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()} `
    //retorno que se va a renderizar
    return (
        <header>
            <nav className="navBar">
          
                <p>Inicio</p>
               
                <p>Te saludo: {props.saludo}</p>
                <p className="shopping-cart">shopping-cart</p>
               
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
