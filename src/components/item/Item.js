/* ###############################
    Importaciones
##################################*/
import "./Item.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from "../itemCount/ItemCount";
import ItemDetail from "../itemDetail/ItemDetail";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

/* ###############################
    Logica
##################################*/
const Item = (props) => { //funcion constructora

    const [cantidad, setCantidad] = useState(0)

    const tomarCantidad= (numero) => {
        setCantidad(numero)
    }
    
    
    useEffect(()=> {
        //ejecuta cuando inicializa
        console.log(cantidad*props.data.price)
        
    },[cantidad])
 
    //const {marca, categoria, color, precio, stock} = props.data

    return (
       <div>
            <div>
                <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180"></Card.Img>
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>Description: {props.data.description}</Card.Text>
                        
                        <Card.Text>Categoria: {props.data.category}</Card.Text>
                        <Card.Text>Precio: ${props.data.price}</Card.Text>
                        <ItemCount stock={10} cantidades={tomarCantidad}></ItemCount>
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
