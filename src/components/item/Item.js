/* ###############################
    Importaciones
##################################*/
import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";
import { Link } from "react-router-dom";

/* ###############################
    Logica
##################################*/
const Item = (props) => { //funcion constructora

   
 
    //const {marca, categoria, color, precio, stock} = props.data

    return (
       <div>
            <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.data.title}</Card.Title>
                    <Card.Text>Estilo: {props.data.description}</Card.Text>
                    <Card.Text>Color: {props.data.category}</Card.Text>
                    <Card.Text>Precio: ${props.data.price}</Card.Text>
                    <ItemCount stock={10}></ItemCount>                   
                    
                    <Link to={`/producto/${props.data.id}`}>Ver detalle del producto</Link>
                    <Button variant="primary">Comprar</Button>
                    
                </Card.Body>
            </Card>
            </div>
          
       </div>
       
       
      
    )
}

/* ###############################
    Exportaciones
##################################*/

export default Item
