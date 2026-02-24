let burger = document.querySelector("#burger")
let nav = document.querySelector("#nav")

burger.addEventListener("click",deplegarMenu)

function deplegarMenu(){
    nav.classList.toggle("hidden")
}