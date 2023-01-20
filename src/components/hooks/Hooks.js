/* ###############################
    Importaciones
##################################*/
import { useState, useEffect } from "react";

import "./Hooks.css"


/* ###############################
    Logica
##################################*/
const Hooks = () => { //funcion constructora

    //hooks de estado
    //constructor [estado, funcion que actualizaa el estado] = inicializacion del estado (valor por default del estado)

    const [contador, setContador] = useState(0)
     const [intentos, setIntentos] = useState(0)
    //hooks de efectos
    // useEfecct (funcion(inicio, fin)), cantidad de instancias
  
  
    useEffect( () => {
        console.log("componente iniciando");
            document.addEventListener("click", (e) => {
                if (e.target.id === "123"){
                    console.log(e)
                }
            })
           // setIntentos (intentos + 1)
        return () => {
            console.log("componente finalizado")
        }
    }, []);

   

    const sumar = () => {
        setContador(contador+1)
    
    }

    const restar = () => {
        if (setContador > 0){
        setContador(contador-1)
        }
    }
 
 
    return (

        <div>
            <p>HOOKSS</p>
            <button onClick={sumar} >sumar</button>
            <button onClick={restar} >restar</button>
            <p>{contador}</p>
        </div>
       

        



    )
}

/* ###############################
    Exportaciones
##################################*/

export default Hooks
