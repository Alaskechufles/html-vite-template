let miVariable = true; // false
/* console.log(miVariable) */

/* if (-2) {
    console.log("Es verdadero")
}else if(){

}else{

} */

// Bucles

/* for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
} */

// Funciones

let resultado;

function sumarNumeros(num1,num2) {
    return num1 + num2
}

resultado = sumarNumeros(2,5) //7

console.log(resultado)

function verificarSiEsPar(num) {
    if (num % 2 === 0) {
        return true
    }else{
        return false
    }
}

console.log(verificarSiEsPar(resultado))

if(verificarSiEsPar(resultado)){
    console.log("es par")
}else{
    console.log("no es par")
}

const restar = function (num1,num2) {
    return num1 - num2
}

console.log(restar(8,4))

const multiplicar = (num1,num2)=>{return num1*num2}

console.log(multiplicar(8,4))

let arrayDeFrutas = []

/* arrayDeFrutas.push("Fresa","Limón")
arrayDeFrutas.unshift("Mango","Pera","Piña")

console.log(arrayDeFrutas)

arrayDeFrutas.shift()
arrayDeFrutas.pop()
 */

console.log(arrayDeFrutas)

let persona = {
    edad : 27,
    nombre: "Diego",
    estaCasado: true,
    materias : ["Math", "Science", "Development"],
    familia:[
        {
            nombreDeFamiliar: "Sigrid",
            rol:"esposa"
        },
        {
            nombreDeFamiliar: "Jinshi",
            rol:"gato"
        },
        {
            nombreDeFamiliar: "MaoMao",
            rol:"gato"
        },
    ],
    saludar: function (params) {
        console.log(this.nombre + " te saluda"  )
    }
}


console.log(persona.familia[0].nombreDeFamiliar)
console.log(persona.nombre)
persona.saludar()

// hola 
