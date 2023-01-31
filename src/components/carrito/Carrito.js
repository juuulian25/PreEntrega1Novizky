/* ###############################
    Importaciones
##################################*/
import "./Carrito.css"

/* ###############################
    Logica
##################################*/
const Carrito = (props) => { //funcion constructora

 
    return (
        <div>
            <h2>Estamos en el carrito</h2>
            <div className="cart-box">
            <h1 className="cardWidget">icono carrito: {props.cantidad}</h1>
        </div>
        </div>
       
    )
}

/* ###############################
    Exportaciones
##################################*/

export default Carrito