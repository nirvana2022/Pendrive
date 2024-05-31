// Sentencia if
let a = 10;
if (a>0){ 
    console.log(`El numero ${a} es positivo`)
    //complemento bloque else cuando no se cumple la condicion
}

// Bloque if else
let b = -10;
if (b>0){
    console.log(`El numero ${b} es positivo`)
    //complemento bloque else cuando no se cumple la condicion
}
else{console.log(`El numero ${b} es 0 o es negativo`)}

// Bloque if /else if/else
let num1 = 10
let num2 = 20
if (num1 == num2){
    console.log("Los numeros ingresados son iguales")
}
else if(num1>num2){
    console.log(`${num1} es mayor que ${num2}`)
}
else {
    console.log(`${num1} es menor que ${num2}`)
}

// Operador ternario
let d = 1;
(d>10)? console.log("Es positivo"):console.log("Es negativo o es cero")


//