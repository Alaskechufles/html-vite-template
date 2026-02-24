let curso = {
    nombre:"Math",
    nota:16,
    aprobado:true
    }

    console.log(curso)
    curso["turno"] = "tarde"
    console.log(curso)
    curso.turno = "mañana"
    console.log(curso)
/*     delete curso.nombre
    console.log(curso) */
/*     curso = {}
    console.log(curso)
    curso = null
    console.log(curso) */

for (const clave in curso) {
    if (clave !== "nota") {
        console.log(`${clave}: ${curso[clave]}`)
    }
}

const books = [
  { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
  { id: 2, title: "JavaScript: The Good Parts", author: "Douglas Crockford", available: false },
  { id: 3, title: "Eloquent JavaScript", author: "Marijn Haverbeke", available: true }
];

function traerTodosLosDisponibles(param) {
    let librosDisponibles = []
    for (let i = 0; i < param.length; i++) {
        const element = param[i];
        console.log(element.available)
        if (element.available === true) {
            librosDisponibles.push(element.title)
        }  
    }
    return librosDisponibles
}

console.log(traerTodosLosDisponibles(books)) // Clean Code, Eloquent JavaScript

function traerNombrePorID(ID){
    let libro;
    for (let i = 0; i < books.length; i++) {
        const element = books[i];
        if (element.id === ID) {
            libro = element.title
        }
    }
    return libro
}

console.log(traerNombrePorID(3)) // Clean Code

//hola

