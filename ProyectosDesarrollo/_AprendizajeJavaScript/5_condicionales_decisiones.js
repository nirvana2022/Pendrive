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
(d>0)? console.log("Es positivo"):console.log("Es negativo o es cero")


// Ejercicios Condicionales
// Condicionales -> Mayor de edad
const EDAD_ADULTO = 18;
let edadPersona = 15;
if (edadPersona >= EDAD_ADULTO)
    console.log("Es mayor de edad");
else
    console.log("Es menor de edad");

// Condicionales -> Dia de la semana
let diaSemana = "9";
if (diaSemana == 1){
    console.log("El día es lunes");
}
else if(diaSemana == 2){
    console.log("El día es martes");
}
else if(diaSemana == 3){
    console.log("El día es miercoles");
}
else if(diaSemana == 4){
    console.log("El día es jueves");
} 
else if(diaSemana == 5){
    console.log("El día es viernes");
}
else if(diaSemana == 6){
    console.log("El día es sabado");
}
else if(diaSemana == 7){
    console.log("El día es domingo")
}
else 
    console.log(`Valor ingresado  "${diaSemana}" no valido`)
