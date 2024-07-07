// Funciones en Java Script -> Retorna un valor
function sumar(a,b){
    resultadoSuma = a+b;
    return(resultadoSuma);
}

function restar(a,b){
    resultadoResta = a-b;
    return(resultadoResta);
}

function producto(a,b){
    resultadoProducto = a*b;
    return(resultadoProducto);
}

// Procedimiento -> no retorna valor
function imprimir(resultadoSuma){
    console.log(resultadoSuma);
}

a=4;
b=2;
imprimir(sumar(a,b));
imprimir(restar(a,b));
imprimir(producto(a,b));
imprimir([resultadoSuma,resultadoResta,resultadoProducto])

// Tipos de funciones en Java Script
// Funciones definidas por el usuario
// Funciones definidas dentro del lenguaje "Built-in"  -> Para cadenas de caracteres y matemáticas


// 1. Definir un procedimiento
function saludar(mensaje){
    // Cuerpo de la función
    console.log(`Mensaje: ${mensaje} `);
}
// 2. Llamar el procedimiento
saludar("Hola mundo");

// Paso por Valor en Java Script
// Pasando información de tipo primitivo (number, bool, string)
function cambiarValor(parametro){
    parametro = 20;
}
let argumento = 10;
cambiarValor(argumento);
console.log(argumento);

// Paso por referencia en Java Script
// Los objetos (array) se pasan por referencia

function cambiarValorRef(parametro){
    parametro[0]=20;
}
let arreglo=[10];
console.log(`Antes de aplicar funcion: ${arreglo}[0] `);
cambiarValorRef(arreglo);
console.log(`Despues de aplicar funcion: ${arreglo}[0] `);

// Paso de cadenas en Java Script
// Cadenas inmutables
function cambiarValorCad(parametro){
    parametro = "Hasta pronto";
}
let argumento1 = "Bienvenido"
console.log(`Antes de aplicar funcion: ${argumento1}`);
cambiarValorCad(argumento1);
console.log(`Despues de aplicar funcion: ${argumento1}`);

// Alcance de variables en JavaScript
var ajusteVariable = 0;
let variableGlobal = 1;
console.log(variableGlobal)
variableGlobal = 2;
console.log(variableGlobal)
function miFuncion(variableLocal){ 
    console.log(variableLocal);
    variableGlobal = 20
    let ajusteVariable = 30;
}
miFuncion(variableGlobal);

// Funciones recursivas
function funcionRecursiva(numero){
    //Caso base 
    if (numero == 1)
        console.log(numero);
    else{
        console.log(numero);
        funcionRecursiva(numero - 1);
    }
}
funcionRecursiva(3);


// Funciones incorporadas en javascript

// Largo de una cadena
cadena = "Hola mundo";
console.log(cadena.length);
// Las cadenas declaradas en javascript son inmutables
cadena[0] = "x";
console.log(cadena);
// Si podemos asignar una nueva cadena
cadena = "Hola";
console.log(cadena);
// Imprimir valores de una cadena ordenado
for (let indice = 0; indice < cadena.length; indice++){
    console.log(cadena[indice]);
}
// Imprimir valores de una cadena invertido
for (let indice = cadena.length; indice >= 0; indice--){
    console.log(cadena[indice]);
}
// Imprimir la mitad de una cadena ordenado
cadena = "12345678"
for (let indice = 0; indice < cadena.length/2; indice++){
    console.log(cadena[indice]);
}
// Imprimir la mitad de una cadena invertido
cadena = "12345678"
for (let indice = cadena.length/2; indice >=0; indice--){
    console.log(cadena[indice]);
}

// Subcadenas en javascript con substring (indice_inicio, indice_final)
cadena = "Hola Mundo"
cadena2 = cadena.substring(0,5);
cadena3 = cadena.substring(0,5-1);
cadena1 = cadena.substring(5,cadena.length);
console.log(cadena2);
console.log(cadena3);
console.log(cadena1);

// Concatenación de cadenas en JS
palabra1 = "Hola";
palabra2 = "Mundo";
frase = palabra1 +" "+ palabra2;
console.log(frase);
console.log(typeof frase);

frase2 = `${palabra1} ${palabra2}`;
console.log(frase2);
console.log(typeof frase2);

// Convertir cadena a número
cadena1 = "10";
cadena2 = "20";
cadenaUnida = (cadena1 + cadena2);
console.log(cadenaUnida);
console.log(typeof cadenaUnida);
let suma = parseInt(cadena1) + parseInt(cadena2)
console.log(suma);
console.log(typeof suma);

// Convertir números a cadenas en JS
let c=5, d=7;
let concatenar = c.toString() + d.toString();
console.log(concatenar); 
console.log(typeof concatenar)

// Valor absoluto de un numero en JS
// <-(-3)-(-2)-(-1)-(0)-(1)-(2)-(3)->
let numero = -10;
let numeroAbs = Math.abs(numero);
console.log(numeroAbs);

// Redondeo y truncado en JS
let num = 8.5;
// redondear a un numero >= .5 a numero  
console.log(Math.round(num));
// elimina la parte decimal
console.log(Math.trunc(num));

