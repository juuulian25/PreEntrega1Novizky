import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ItemBBDD = (props) => { //funcion constructora

console.log(props.obj.price)
 
    return (

        
        <div>
        
            <Card style={{ width: '20rem' }}>
                                
               <Card.Body>
                    <Card.Title> {props.obj.title}</Card.Title>
                    <Card.Text>Description: {props.obj.description}</Card.Text>                    
                    <Card.Text>Precio: ${props.obj.price}</Card.Text>
                   
                    <Button variant="primary">Comprar</Button>
                                            
                 </Card.Body>        
           </Card>


        </div>

      



    )
}



/* ###############################
    Exportaciones
##################################*/

export default ItemBBDD