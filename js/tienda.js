const storeProducts = [
  {
    id: 1,
    name: "Laptop Gamer X15",
    category: "Computadoras",
    price: 4500,
    stock: 8,
    rating: 4.7,
    onSale: true,
    URLImg: "https://placecats.com/300/200",
    URLDespliegue: "https://github.com/"
  },
  {
    id: 2,
    name: "Laptop Office Pro",
    category: "Computadoras",
    price: 3200,
    stock: 15,
    rating: 4.3,
    onSale: false
  },
  {
    id: 3,
    name: "Mouse Inalámbrico",
    category: "Accesorios",
    price: 120,
    stock: 40,
    rating: 4.5,
    onSale: true
  },
  {
    id: 4,
    name: "Teclado Mecánico RGB",
    category: "Accesorios",
    price: 350,
    stock: 20,
    rating: 4.8,
    onSale: false
  },
  {
    id: 5,
    name: "Monitor 27'' 4K",
    category: "Monitores",
    price: 1800,
    stock: 10,
    rating: 4.6,
    onSale: true
  },
  {
    id: 6,
    name: "Monitor 24'' Full HD",
    category: "Monitores",
    price: 950,
    stock: 18,
    rating: 4.2,
    onSale: false
  },
  {
    id: 7,
    name: "Silla Gamer Ergonómica",
    category: "Muebles",
    price: 1200,
    stock: 5,
    rating: 4.4,
    onSale: true
  },
  {
    id: 8,
    name: "Escritorio Ajustable",
    category: "Muebles",
    price: 1500,
    stock: 7,
    rating: 4.1,
    onSale: false
  },
  {
    id: 9,
    name: "Tablet Pro 11",
    category: "Tablets",
    price: 2100,
    stock: 12,
    rating: 4.6,
    onSale: true
  },
  {
    id: 10,
    name: "Smartphone Ultra X",
    category: "Celulares",
    price: 3800,
    stock: 9,
    rating: 4.9,
    onSale: true
  },
  {
    id: 11,
    name: "Smartphone Lite",
    category: "Celulares",
    price: 1500,
    stock: 25,
    rating: 4.0,
    onSale: false
  },
  {
    id: 12,
    name: "Audífonos Bluetooth",
    category: "Audio",
    price: 400,
    stock: 30,
    rating: 4.3,
    onSale: true
  },
  {
    id: 13,
    name: "Parlante Portátil",
    category: "Audio",
    price: 650,
    stock: 14,
    rating: 4.5,
    onSale: false
  },
  {
    id: 14,
    name: "Disco SSD 1TB",
    category: "Componentes",
    price: 500,
    stock: 22,
    rating: 4.8,
    onSale: true
  },
  {
    id: 15,
    name: "Memoria RAM 16GB",
    category: "Componentes",
    price: 320,
    stock: 35,
    rating: 4.7,
    onSale: false
  }
];

/* let contenedor = document.querySelector("#contenedor")
let navegador = document.querySelector("#nav")
let menu = document.querySelector("#menu")

menu.addEventListener("click",()=>{
  navegador.classList.toggle("hidden")
}) */


/* 
{
    id: 1,
    name: "Laptop Gamer X15",
    category: "Computadoras",
    price: 4500,
    stock: 8,
    rating: 4.7,
    onSale: true
    URLImg: "https://placecats.com/300/200"
  }, */
let producto1 = {
   id: 1,
    nameProduct: "Laptop Gamer X15",
    category: "Computadoras",
    price: 4500,
    stock: 8,
    rating: 4.7,
    onSale: true,
    URLImg: "https://placecats.com/300/200"
}

const {nameProduct,category,price} = producto1

console.log(nameProduct)
console.log(category)
console.log(price)






for(let i=0;i<storeProducts.length;i++){
  contenedor.innerHTML += `
  <div class=" m-3 border rounded-2xl p-2 max-w-50 hover:border-blue-500 hover:border-2">
    <img src=${storeProducts[i].URLImg ? storeProducts[i].URLImg : "https://placekittens.com/300/200" } >
    <p>${storeProducts[i].name}</p>
    <p>${storeProducts[i].category}</p>
    <p>${storeProducts[i].price}</p>
    <p class=${storeProducts[i].onSale ? "bg-green-300": "bg-red-300"}>${storeProducts[i].onSale}</p>
    <a href=${storeProducts[i].URLDespliegue} target="_blank">Link de Despliegue</a>
  </div>`
}


let x = 1;
let y = 2;

let z = x
x = y 
y = z

// x=2 & y=1