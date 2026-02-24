let tituloDePagina = document.querySelector("#titulo")

console.log(tituloDePagina.classList)

tituloDePagina.classList.add("font-bold", "text-center" , "text-red-500" , "perrito" , "subrayar")

console.log(tituloDePagina.classList)

tituloDePagina.classList.remove("perrito","font-bold")

console.log(tituloDePagina.classList)

tituloDePagina.style.color = "white"
tituloDePagina.style.backgroundColor = "#004a77"

let caja1 = document.querySelector(".uno")
let caja2 = document.querySelector(".dos")
let caja3 = document.querySelector(".tres")
let caja4 = document.querySelector(".cuatro")

caja1.classList.add("bg-red-600")
caja2.classList.add("bg-blue-600")
caja3.classList.add("bg-purple-600")
caja4.classList.add("bg-green-600")

let pares = document.querySelectorAll(".par")
let impares = document.querySelectorAll(".impar")

console.log(impares[0])
console.log(pares[0])
console.log(impares[1])
console.log(pares[1])

pares[0].classList.add("font-bold","text-white")

let listas = document.querySelectorAll(".lista")

console.log(listas)

let elementosDeLista = ["primero", "segundo", "tercero" ,"cuarto"]


for (let i = 0; i < listas.length; i++) {
    const element = listas[i];
    element.classList.add("underline")
    element.textContent = elementosDeLista[i]
}

let tcontent = document.querySelector("#tcontent")
let inhtml = document.querySelector("#inhtml")

let contraseña = "******"

tcontent.textContent = "hola, adios 1231 <spam>este es un spam </spam>"
inhtml.innerHTML = `hola este es innerhtml`

/* const fragment = document.createDocumentFragment();
const li = fragment
  .appendChild(document.createElement("section"))
  .appendChild(document.createElement("ul"))
  .appendChild(document.createElement("li"));
li.textContent = "hello world";

document.body.appendChild(fragment); */