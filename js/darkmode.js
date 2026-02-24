let htmldoc = document.querySelector("#html");
let btnDarkmode = document.querySelector("#darkmode");

btnDarkmode.addEventListener("click",cambiarDarkmode)

function cambiarDarkmode() {
    htmldoc.classList.toggle("dark")
}

let cajita = document.querySelector("#cajita")