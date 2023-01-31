/* ###############################
    Importaciones
##################################*/
import ItemBBDD from "../ItemBBDD/itemBBDD"
import { useState, useEffect } from "react"
import "./ItemListBBDD.css"


/* ###############################
    Logica
##################################*/
const ItemListBBDD = () => { //funcion constructora

    const [arrayProductos, setarrayProductos] = useState([])

    const [loading, setloading] = useState(true)

    const [arrayPrueba, setarrayPrueba] = useState( [
        {
            id:1,
            title: "Nike",
            color: "Blanca",
            price: 30000,
            description: "Running",
            stock: 4
        },
        {
            id:2,
            title: "Adidas",
            color: "Roja",
            price: 25000,
            description: "Running",
            stock: 5
        },
        {
            id:3,
            title: "Puma",
            color: "Negra",
            price: 21000,
            description: "Training",
            stock: 6
        },
        {
            id:4,
            title: "Fila",
            color: "Verde",
            price: 15000,
            description: "Training",
            stock: 3

        }
        ]   
        );

    //RENDERIZADO AL INICIO
    useEffect(()=> {
        
        fetch('https://fakestoreapi.com/products?limit=15')
        .then(res=>res.json())
        .then(arrayDeApy=>setarrayProductos(arrayDeApy))
        .then(() => setloading(false))

    }, [])

    if (loading === true){
        return ( <div>
            <h4>cargando...</h4>
        </div>)
    } else {
        return (
            <div>
                <h2>Lista productos base de datos</h2>
                {arrayPrueba.map(objeto => <ItemBBDD obj={objeto}></ItemBBDD>)}
            </div>


        )

    }
    
}

//hacer un boton que elimine un producto que elija



/* ###############################
    Exportaciones
##################################*/

export default ItemListBBDD




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
     
    ]
*/