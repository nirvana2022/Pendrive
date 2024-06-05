// Ciclo while
let contador = 0, repeticiones = 5;
while (contador <= repeticiones){
    console.log(contador++);
    //contador++;
}

// Ciclo do while
let contador1 = 0, repeticiones1 = 5;
do{
    console.log(contador1++)
}
while (contador1 <= repeticiones1);

// Ciclo for
let repeticiones2 = 5;
for(let contador2 = 0; contador2 <= repeticiones2; contador2++){
    console.log(contador2);
}

// Ejercicios
// Ejercicio imprimir de 3 en 3

// 1 , 4 , 7 , 10
let maximo = 10, minimo = -10;
console.log('Incremento de 3 en 3');
for(let numero = 1; numero<= maximo; numero +=3){
    console.log(numero)
}
// 1 -2 -5 -8 -11
console.log('Decremento de 3 en 3')
for(let numero = 1; numero>= minimo; numero -=3){
    console.log(numero);
}

// Ejercicios suma acumulativa (for)
let maximo2 = 5, acumuladorSuma = 0;
for(let contador = 1; contador<=maximo2; contador ++){
    // Ver los valores que se van sumando en cada iteración
    console.log(`${acumuladorSuma} + ${contador}`)
    acumuladorSuma += contador;
    console.log(acumuladorSuma)
}
console.log(acumuladorSuma)

// Ejerecicios suma acumulativ (while)
let maximo4 = 5, acumuladorSuma4 = 0, contador4 = 1;
while (contador4 <= maximo4){
    console.log(`${acumuladorSuma4} + ${contador4}`)
    acumuladorSuma4 += contador4
    console.log(acumuladorSuma4)
    contador4 ++
}

// Ejercicios suma acumulativa (do while)
let maximo3 = 5, acumuladorSuma1 = 0, contador3 = 1;
do{
    console.log(`${acumuladorSuma1} + ${contador3}`)
    acumuladorSuma1 += contador
    console.log(acumuladorSuma1)
    contador3 ++
}
while (contador3 <= maximo3);



