const frutas = ['manzana', 'pera', 'uva', 'sandía'];

frutas.forEach((elemento, position, canasta) => {
  console.log(`-${position+1} ${elemento} - ${canasta}`);
});

let nuevaCanasta = frutas.map((fruta)=>{
    let frutaObjeto = {
        nombre: fruta,
        cantidad: 1
    }
    return frutaObjeto})

console.log(nuevaCanasta)