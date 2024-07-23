// Modo Strict para evitar declarar variables sin iniciarlas
"use strict"
// x = 10; // -> Error
let x = 10;
console.log(x);

miFuncion();
function miFuncion(){
   // y = 15; // -Error
   let y = 15;
   console.log(y);
}