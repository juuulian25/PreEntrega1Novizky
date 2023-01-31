/* ###############################
    Importaciones
##################################*/
import "./ItemDetail.css"
import ItemCount from "../itemCount/ItemCount"
import Item from "../item/Item";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
/* ###############################
    Logica
##################################*/
const ItemDetail = (props) => { //funcion constructora
 
   

   
 
    return (
       
       <div>
            
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>                  
                        <Card.Text>Precio: ${props.data.price}</Card.Text>
                        <Link to={`/producto/${props.data.id}`}>Ver detalle del producto</Link>
                                                            
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

