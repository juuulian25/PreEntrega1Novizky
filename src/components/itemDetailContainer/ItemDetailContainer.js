/* ###############################
    Importaciones
##################################*/
import "./ItemDetailContainer.css"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

import ItemDetail from "../itemDetail/ItemDetail"
/* ###############################
    Logica
##################################*/
const ItemDetailContainer = () => { //funcion constructora

    const [productos, setProductos] = useState([])
    const {productoId} = useParams()
 
    useEffect(()=> {
        
        fetch(`https://fakestoreapi.com/products/${productoId}`)
        .then(res=>res.json())
        .then(productos=>setProductos(<ItemDetail key={productos.id} id={"producto"+ productos.id} data={productos}/>))

    }, [productoId])


    return (


        <div>
            <p>ItemDetailContainer</p>
            <Link to="producto">Volver a mis productos</Link>
            {productos}
            <ItemDetail></ItemDetail>
       </div>
    )
}

/* ###############################
    Exportaciones
##################################*/

export default ItemDetailContainer
