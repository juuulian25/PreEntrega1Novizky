const data = [
    {
        id:1,
        nombre: "Julian"
    },

    {
        id:2,
        nombre: "Nicolas"
    },

    {
        id:3,
        nombre: "Santiago"
    }
]

//informacio cruda JSON
//iterar y transformar en html
// renderizar este nuevo array

//DATA
//DATA en HTML
//renderizo data en html



//opcion viable si no sabemos usar .map
/*
const dataHTML = []
data.forEach( e => {
    let html = <p>${e.nombre}</p>
    dataHTML.push(html)
})
*/




//ejemplo

data.forEach((el) => {
    console.log(el.nombre)
})


for (let i = 0; i < data.length; i++){
    console.log(data[i].nombre);
}

//en react

let data2 = data