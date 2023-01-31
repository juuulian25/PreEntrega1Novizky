/* ###############################
    Importaciones
##################################*/


/* ###############################
    Logica
##################################*/
const Boton = (props) => { //funcion constructora


const funcionLocal = () => {
    props.funcionHandler(props.variable)
}


    return (
       <div>
            <button onClick={funcionLocal}>{props.variable}</button>
          
            
       </div>
    )
}

/* ###############################
    Exportaciones
##################################*/

export default Boton