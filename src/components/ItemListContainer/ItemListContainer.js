/* ###############################
    Importaciones
##################################*/
import "./ItemListContainer.css"
import CardWidget from "../cardWidget/CardWidget"
import { Button } from "react-bootstrap"
/* ###############################
    Logica
##################################*/
const ItemListContainer = (props) => { //funcion constructora

    return(
        
        <h1>Tienda Libre {props.greeting}</h1>

        
    )
 
   
}

/* ###############################
    Exportaciones
##################################*/

export default ItemListContainer


