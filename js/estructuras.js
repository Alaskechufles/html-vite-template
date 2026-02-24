// "si" de condición

/* let nombreUsuario = prompt("Ingrese su nombre: ")

if(nombreUsuario === "Andres" ){
    alert("Bienvenido Jefecito")
} else if(nombreUsuario === "Mario"){
    alert("Bienvenido Supervisor")
} else {
    alert("Bienvenido y pongase a trabajar")
} */

// escribe un programa que pida un número al usuario y que identifique si es positivo, negativo o cero

/* parseFloat y parseInt */

/* let numero = parseFloat(prompt("Escribe tu número"))

if(numero === 0){
    alert("el número es 0")
} else if(numero > 0){
    alert("el número es positivo")
} else if (numero < 0){
    alert("el número es negativo")
} else{
    alert("ingrese un número válido")
} */

/* 
 escribe un programa que verfique la mayoria de edad del usuario. El usuario ingresará su año de nacimiento y se le enviará un mensaje acorde al rango de edad: 
 adulto(mayor de 18 años) - Es mayor de edad
 joven(entre 14 y 18 años) - Eres un joven 
 niño(menor a 14 años) - Eres un niño 
 */

/* 
Descuento en una tienda
Pide el monto de compra:
≥ 500 → 20% de descuento
≥ 300 → 10% de descuento
< 300 → sin descuento
Muestra el precio final.
 */

/* 
Escriba un programa que pida un número al usuario y que envie un mensaje si es positivo o negativo y si es par o impar
 */
let num = parseFloat(prompt("Escribe tu número"));
let esPar;
let esPositivo;

if (num === 0) {
    alert("el numero es 0")
} else {
    if (num > 0) {
        esPositivo = true
    } else {
        esPositivo = false
    }
    if (num % 2 === 0) {
        esPar = true
    } else {
        esPar = false
    }
    let msjPar;
    if (esPar) {
        msjPar = "par"
    } else {
        msjPar = "impar"
    }
    let msjPos;
    if (esPositivo) {
        msjPos = "positivo"
    } else {
        msjPos = "negativo"
    }
    alert(`El número ${num} es ${msjPar} y ${msjPos}`)
}


