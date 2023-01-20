/* ###############################
    Importaciones
##################################*/
import "./ItemCount.css"
import { useState } from "react"
/* ###############################
    Logica
##################################*/
const ItemCount = (props) => { //funcion constructora

    //props.stock = 7

    const [count,setCount] = useState(0)
 
    const addOne = () => {
        if (count < props.stock){
        
        setCount(count+1)
        }
    }

    const disOne = () => {
        if (count > 0){
        setCount(count-1)
        }
    }

    const onAdd = () => {
        console.log(count)
    }


    return (
        <div className="box-count">
            <p>logica contador</p>
            <button onClick={addOne}>+</button>
            <p>{count}</p>
            <button onClick={disOne}>-</button>
            <button onClick={onAdd}>on Add</button>


       </div>
    )
}

/* ###############################
    Exportaciones
##################################*/

export default ItemCount
