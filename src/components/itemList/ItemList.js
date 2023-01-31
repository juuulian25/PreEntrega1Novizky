
/* ###############################
    Importaciones
##################################*/
import "./ItemList.css"
import ItemDetail from "../itemDetail/ItemDetail"
import { useState, useEffect } from "react"
import Boton from "../boton/Boton"
/* ###############################
    Logica
##################################*/
const ItemList = (props) => { //funcion constructora

    //lamada a array objetos
    //iterar array


    //nuestra api de productos

       
    const [titulo, setTitulo] = useState("Vacio")

    const [inicio, setInicio] = useState(true)

    useEffect(()=> {
        
        fetch(`https://fakestoreapi.com/products/category/${titulo}`)
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productoJoyas => <ItemDetail key={productoJoyas.id} id={"producto"+ productoJoyas.id} data={productoJoyas}/>)))

    }, [titulo])

    
    const [productos, setProductos] = useState([])
//RENDERIZADO AL INICIO
    useEffect(()=> {
        
        fetch('https://fakestoreapi.com/products?limit=15')
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productos => <ItemDetail key={productos.id} id={"producto"+ productos.id} data={productos}/>)))

    }, [])


    //********************************* */

    const categoria = [
        "electronics", "jewelery", "men's clothing", "women's clothing"

    ]

    const elegirCategoria = (loQueMePaso) => {
      
        setTitulo(loQueMePaso)
        
    }

  
//***************************************** */

    return (
        <div>

            <h2>Lista de productos:</h2>
            
           
            
            <p>Filtrar productos por categoria:</p>
        
            
            {categoria.map(nombre => <Boton variable={nombre} funcionHandler={elegirCategoria}></Boton>)}         
            <h4> {titulo} </h4>
            {productos}
    
           

        </div>
    )
}





/* ###############################
    Exportaciones
##################################*/

export default ItemList
