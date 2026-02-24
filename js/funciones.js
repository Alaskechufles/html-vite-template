function nombreDeLaFuncion(parametro1, parametro2) {}

/**
 * Calcula la suma de 2 números 
 * @param {number} num1 - El primer número de la operació
 * @param {number} num2 - El segundo número de la operació
 * @returns {number} La suma de ambos números
 */
function sumar2Numeros(num1, num2) {
  let suma = num1 + num2
  return suma
}

console.log(sumar2Numeros(5, 7))

const sumar2Numeros2 = (num1,num2) => {return num1 + num2}
console.log(sumar2Numeros2(3,4))


// crea una funcion que me calcule el área de un circulo (pi*(radio)**2)

function saludar() {
  console.log("¡Hola, mundo!");
}
saludar()

let balance = 1000
console.log(balance)
retirarDinero(400)
retirarDinero()
console.log(balance)

function retirarDinero(withdrawal=10){
    balance = balance - withdrawal
}

const despedir = function(usuario = "Andres") {
  console.log("¡Hasta luego! "+ usuario);
};

despedir("Diego")

/* 
🍔 FAST FOOD – CARTA DE PRODUCTOS
🥪 Hamburguesas
Hamburguesa Clásica – S/ 12
Pan, carne, lechuga y salsa especial
Hamburguesa con Queso – S/ 14
Carne, queso, lechuga y tomate
Hamburguesa Doble – S/ 18
Doble carne, queso y salsa especial
🍕 Pizzas
Pizza Personal – S/ 18
Queso y salsa de tomate
Pizza Pepperoni – S/ 22
Queso, pepperoni y salsa
Pizza Suprema – S/ 25
Queso, carnes y verduras
🍟 Acompañamientos
Papas Fritas Pequeñas – S/ 5
Papas Fritas Medianas – S/ 7
Papas Fritas Grandes – S/ 9
🥤 Bebidas
Gaseosa – S/ 5
Agua – S/ 4
Jugo Natural – S/ 6
🍨 Postres
Helado – S/ 6
Brownie – S/ 7
🍔 Condiciones del ejercicio (Fast Food)
💰 1️⃣ Descuentos por monto
Total ≥ S/ 60 → 20% de descuento
Total ≥ S/ 40 → 10% de descuento
Total < S/ 40 → sin descuento
⏱️ 2️⃣ Horario especial(opcional)
Si el pedido se realiza entre 12:00 y 14:00
Aplica 5% de descuento adicional
👉 Solo si ya hay al menos un producto.
🍟 3️⃣ Promoción de combos
Por cada hamburguesa, se permite agregar:
Papas pequeñas a S/ 3 (en vez de S/ 5)
Si no hay hamburguesa, no aplica la promo.
🥤 4️⃣ Bebida gratis
Si el total supera S/ 50
Se agrega 1 gaseosa gratis
(no suma al total)
👉 Solo una vez por pedido.
🧾 5️⃣ Límite de productos
Máximo 10 productos por pedido.
Si se supera, mostrar mensaje:
“Límite de productos alcanzado”
❌ 6️⃣ Validaciones obligatorias
No permitir:
precios negativos
opciones fuera del menú
Si la opción es inválida:
mostrar mensaje y repetir menú
🔄 7️⃣ Confirmación de salida
Antes de finalizar el pedido:
Preguntar:
¿Desea confirmar el pedido? (sí / no)
🧠 8️⃣ Descuento exclusivo
Si el cliente compra:
Pizza + Bebida
Aplicar S/ 3 de descuento fijo
👉 No acumulable con otros descuentos (esto es un buen reto).
*/