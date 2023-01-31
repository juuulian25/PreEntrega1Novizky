/* ###############################
    Importaciones
##################################*/

import "./ItemListContainer.css"
import { useEffect } from "react"
import ItemList from "../itemList/ItemList"
//import Hooks from "../hooks/Hooks"
import ItemCount from "../itemCount/ItemCount"
import { useParams } from "react-router-dom"

/* ###############################
    Logica
##################################*/
const ItemListContainer = (props) => { //funcion constructora

    const {productoId} = useParams()

    useEffect(()=>{
        console.log(productoId + "inicio del renderizador")
        return ()=> {
            console.log(productoId + "fin renderizado")
        }
    },[productoId])

    return(
        <div>
            <h1>Tienda Libre</h1>
            <p>Productos traidos de una apy</p>

          
            <ItemList/>

        
    
        </div>
    )
 
   
}


/*
<ItemCount stock="1"/>
<ItemCount stock="2"/>
<ItemCount stock="3"/>
<ItemCount stock="4"/>
*/
/* ###############################
    Exportaciones
##################################*/

export default ItemListContainer



/*
  <button onClick={cambiarCategoriaRunning}>Running</button>
            <button onClick={cambiarCategoriaTraining}>Training</button>
            <button onClick={cambiarCategoriaTodo}>Todo</button>*/

            /*
               const [categoriaNombre, setCategoriaNombre] = useState("")

    const cambiarCategoriaRunning = () => {

        setCategoriaNombre("Running")
    }

    const cambiarCategoriaTraining = () => {

        setCategoriaNombre("Training")
    }

    const cambiarCategoriaTodo = () => {

        setCategoriaNombre("Todo")
    }*/