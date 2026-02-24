let opcion = true

let votantesHam = []
let votantesSol = []
let votantesMundo = []

do {
    let action = prompt(`Elije una opción:
        1.Ingresar voto
        2.Finalizar votación`)
    if (action === "1") {
        let eleccion;
        do {          
            let votante = prompt(`ingresa tu nombre:`)
            eleccion = prompt(`
                1.🍔
                2.☀️
                3.🌎
                ingresa tu elección:`)
            if (eleccion === "1") {
                votantesHam.push(votante)
            } else if (eleccion === "2") {
                votantesSol.push(votante)
            } else if (eleccion === "3") {
                votantesMundo.push(votante)
            } else {
                alert("ingrese una opción válida")
            }
        } while (eleccion !== "1" && eleccion !== "2" && eleccion !== "3")
        alert("Voto registrado")
    } else if(action === "2") {
        opcion = false
    }else{
        alert("ingrese una opción válida")
    }
} while (opcion);



alert(`
    El partido 🍔: tiene ${votantesHam.length} votos y sus votantes son: ${votantesHam} 
    El partido ☀️: tiene ${votantesSol.length} votos y sus votantes son: ${votantesSol} 
    El partido 🌎: tiene ${votantesMundo.length} votos y sus votantes son: ${votantesMundo} 
    `)

 
    // hola asdasdasd