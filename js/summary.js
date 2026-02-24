let reactScore = document.querySelector("#reactionScore")
let memScore = document.querySelector("#memoryScore")
let verbScore = document.querySelector("#verbalScore")
let visScore = document.querySelector("#visualScore")
let calculate = document.querySelector("#calculate")
let resultado = document.querySelector("#resultado")

resultado.textContent = "--"

calculate.addEventListener("click",()=>{
    let promedio = (parseFloat(reactScore.value) + parseFloat(memScore.value) + parseFloat(verbScore.value) + parseFloat(visScore.value)) / 4
    resultado.textContent = promedio.toFixed(1)
})


let fecha = new Date()
console.log(fecha.getDate()) // día
console.log(fecha.getMonth()+1) // mes actual
console.log(fecha.getFullYear()) // año 
console.log(fecha.getDay()) // 1-lunes , 2-Martes, 3-Miercoles ...
console.log(fecha.getHours()) // hora en formato 24h 
console.log(fecha.getMinutes()) // minutos
console.log(fecha.getSeconds()) // segundos
