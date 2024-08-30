'use strict';

let municipios = ['serra', 'cariacica', 'vilha velha','viana','vitória', 'guarapari'];

console.log(municipios[0].toUpperCase());

console.log(municipios);

// Removendo dois elemento a partir do elemento 1
municipios.splice(1,2);
console.log(municipios);

// Removendo dois elementos no final
municipios.splice(-2,1);
console.log(municipios);

// Para juntar um array usamos o join e podemos definir um separador
let texto = municipios.join('-');

console.log(texto);