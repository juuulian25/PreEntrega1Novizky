//importaciones
import "./CardWidget.css"
import Button from 'react-bootstrap/Button';

//logica
const CardWidget = (props) => {

 
    return (
       <p className="cardWidget">icono carrito: {props.cantidad}</p>
    )
}

//exportaciones

export default CardWidget