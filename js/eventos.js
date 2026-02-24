let tituloDePagina = document.querySelector("#titulo")

tituloDePagina.addEventListener("dblclick",()=>{
    tituloDePagina.textContent = "Cambio de Título"
    tituloDePagina.classList.toggle("bg-red-600")
})

let cajita = document.querySelector("#cajita")

cajita.addEventListener("change",()=>{
    tituloDePagina.textContent = cajita.value
    console.log(cajita.value)
})