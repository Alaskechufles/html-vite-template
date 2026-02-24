
/* for(let i=0;i<10;i++){
    console.log("Hola")
}

let respuesta = prompt("Desea continuar:");

let continuarBucle = true

while (continuarBucle) {
  console.log(`Contador:`);
  respuesta = prompt("Desea continuar:");
  if (respuesta === "no") {
    continuarBucle = false
  }
} */


// crea un bucle que me imprima los números del 1 al 10
    /* for (let i = 0; i < 10; i++) {
        console.log(i+1)
    } */
// crea un bucle que me imprima los números del 10 al 1
    /* for (let i = 10; i > 0; i--) {
        console.log(i)
    } */
// crea un bucle que me imprima los números del 1 al 20 pero solo los pares
    /* for (let i = 0; i < 20; i++) {
        if ((i + 1) % 2 === 0) { 
            console.log(i+1)
        }
    } */
// crea un bucle que me imprima la suma de los primeros "n" números, siendo "n" un valor ingresado por el usuario. Ejemplo: n=5 respuesta: 1+2+3+4+5 = 15
/* let numero = parseFloat(prompt("Ingrese un número: "))
let suma = 0
for (let i = 1; i <= numero; i++) {
       suma = suma + i
}
console.log(suma) */
// crea un bucle que me imprima la tabla de multiplicar de un número "n" que el usuario ingrese. por ejemplo:
/* 
    7 x 1 = 7 
    7 x 2 = 14 
    7 x 3 = 21 
    7 x 4 = 28 
    7 x 5 = 35 
    7 x 6 = 42 
    7 x 7 = 49 
    7 x 8 = 56 
    7 x 9 = 63 
    7 x 10 = 70 
*/
   /*  let numero = 7
    for (let i = 0; i < 10; i++) {
        console.log(`${numero} x ${i+1} = ${numero*(i+1)}`)
    } */

// crea un bucle que me imprima las tablas de multiplicar hasta el número "n" que el usuario ingrese. por ejemplo:

/* 
n = 3
    1 x 1 = 1 
    1 x 2 = 2 
    1 x 3 = 3 
    1 x 4 = 4 
    1 x 5 = 5 
    1 x 6 = 6 
    1 x 7 = 7 
    1 x 8 = 8 
    1 x 9 = 9 
    1 x 10 = 10
    -
    2 x 1 = 2 
    2 x 2 = 4 
    2 x 3 = 6 
    2 x 4 = 8 
    2 x 5 = 10 
    2 x 6 = 12 
    2 x 7 = 14 
    2 x 8 = 16 
    2 x 9 = 18 
    2 x 10 = 20
    -
    3 x 1 = 3 
    3 x 2 = 6 
    3 x 3 = 9 
    3 x 4 = 12 
    3 x 5 = 15 
    3 x 6 = 18 
    3 x 7 = 21 
    3 x 8 = 24 
    3 x 9 = 27 
    3 x 10 = 30 
*/
/* let numero = 7

for (let i = 0; i < numero; i++) {
        console.log(i+1)    
        for (let j=0; j < 10; j++) {
            console.log(`${i+1} x ${j+1} = ${(i+1)*(j+1)}`)
        }
    } */
/* 
i=2
j=

    1
    1 x 1 = 1
    1 x 2 = 2
    1 x 3 = 3
    1 x 4 = 4 
    1 x 5 = 5 
    1 x 6 = 6 
    1 x 7 = 7 
    1 x 8 = 8 
    1 x 9 = 9 
    1 x 10 = 10
*/

/*
 ATM - Cajero Automatico

 Tiene un limite de 3 intentos

 usuario: Funval
 contraseña : Progra123
 
 Saldo Inicial = $1000
 Debe desplegar un menú de opciones como:
 Retirar - (Solo se puede retirar una cantidad menor al Saldo Actual)
 Depositar
 Ver Saldo
 Salir

 un bucle que hasta que el usuario no elija la opción "Salir" pueda continuar sugiriendo hacer otras operaciones.
 */