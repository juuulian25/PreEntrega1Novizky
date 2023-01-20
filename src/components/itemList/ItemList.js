
/* ###############################
    Importaciones
##################################*/
import "./ItemList.css"
import Item from "../item/Item"
import { useState, useEffect } from "react"
/* ###############################
    Logica
##################################*/
const ItemList = (props) => { //funcion constructora

    //lamada a array objetos
    //iterar array


    //nuestra api de productos
    
    const [productos, setProductos] = useState([])

    useEffect(()=> {
        
        fetch('https://fakestoreapi.com/products?limit=4')
        .then(res=>res.json())
        .then(json=>setProductos(json.map(productos => <Item key={productos.id} id={"producto"+ productos.id} data={productos}/>)))

    }, [])



 
    //let listaPorCategoria
    //let listaDeProductosRenderizables
/*
    const respuesta = new Promise((resolve, reject) => {

        resolve()
    })
*/
    
    
//array de componentes
//asi funciona pero hay una forma mas simple
//const listaDeProductosRenderizables = listaDeProductos.map(productos => <Item key={productos.id} id={"producto"+ productos.id} marca={productos.marca} color={productos.color} precio={productos.precio} categoria={productos.categoria} stock={productos.stock}></Item>)

//forma simple

//id={"producto"+ productos.id}

//pasar informacion real

    return (
        <div>

          
            {productos}
        
        </div>
    )
}

/* ###############################
    Exportaciones
##################################*/

export default ItemList

/*
    const listaDeProductos = [
        {
            id:1,
            marca: "Nike",
            color: "Blanca",
            precio: 30000,
            categoria: "Running",
            stock: 4
        },
        {
            id:2,
            marca: "Adidas",
            color: "Roja",
            precio: 25000,
            categoria: "Running",
            stock: 5
        },
        {
            id:3,
            marca: "Puma",
            color: "Negra",
            precio: 21000,
            categoria: "Training",
            stock: 6
        },
        {
            id:4,
            marca: "Fila",
            color: "Verde",
            precio: 15000,
            categoria: "Training",
            stock: 3

        }
     
    ]*/