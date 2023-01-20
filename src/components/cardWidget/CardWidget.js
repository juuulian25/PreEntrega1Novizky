//importaciones
import "./CardWidget.css"
import Button from 'react-bootstrap/Button';

//logica
const CardWidget = (props) => {

 
    return (
        <div className="cart-box">
            <p className="cardWidget">icono carrito: {props.cantidad}</p>
        </div>
       
    )
}

//exportaciones

export default CardWidget