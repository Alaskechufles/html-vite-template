/* console.log(fecha.getDate()) // día
console.log(fecha.getMonth()+1) // mes actual
console.log(fecha.getFullYear()) // año 
console.log(fecha.getDay()) // 1-lunes , 2-Martes, 3-Miercoles ...
console.log(fecha.getHours()) // hora en formato 24h 
console.log(fecha.getMinutes()) // minutos
console.log(fecha.getSeconds()) // segundos */

function calcularEdad(fechaDeNacimiento) {
    let fechaActual = new Date()
    let nacimiento = new Date(fechaDeNacimiento)
    console.log(fechaActual.getDate())
    console.log(nacimiento.getDate())
    
    
    
}
calcularEdad("May 27, 2025")
calcularEdad("2025-05-27") // UTC 00:00:00