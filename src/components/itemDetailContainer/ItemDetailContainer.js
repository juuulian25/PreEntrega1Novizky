/* ###############################
    Importaciones
##################################*/
import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import Item from "../item/Item"
/* ###############################
    Logica
##################################*/
const ItemDetailContainer = () => { //funcion constructora

    const [productos, setProductos] = useState([])
    const {productoId} = useParams()
 
    useEffect(()=> {
        
        fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(res=>res.json())
        .then(productos=>setProductos(<Item key={productos.id} id={"producto"+ productos.id} data={productos}/>))

    }, [productoId])


    return (


        <div>
            <h2>Item Detail Container</h2>
            {productos}
            
            <p><Link to="/productos">Volver a mis productos</Link></p>
            
       </div>
    )
}

/* ###############################
    Exportaciones
##################################*/

export default ItemDetailContainer
