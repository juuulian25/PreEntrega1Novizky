/* ###############################
    Importaciones
##################################*/
import "./ItemDetail.css"
import ItemCount from "../itemCount/ItemCount"

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
/* ###############################
    Logica
##################################*/
const ItemDetail = (props) => { //funcion constructora
 
    
 
    return (
       
       <div>
            <h2>Item Detail</h2>
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180">{props.data.image}</Card.Img>
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>Estilo: {props.data.description}</Card.Text>
                        <Card.Text>Color: {props.data.category}</Card.Text>
                        <Card.Text>Precio: ${props.data.price}</Card.Text>
                        <Card.Text>Stock: {props.data.stock}</Card.Text>                    
                        <ItemCount/>
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

export default ItemDetail

/*  const {productoId} = useParams()

useEffect(()=>{
    console.log(productoId + "inicio del renderizador")
    return ()=> {
        console.log(productoId + "fin renderizado")
    }
},[productoId])
*/