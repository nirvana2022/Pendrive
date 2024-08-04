// Contar un rango de números
const contarRango = function(inicio = new Number, fin = new Number){
    if (inicio >= fin){
        throw new Error("El primer número debe ser mayor al segundo")
    }
    let suma = 0;
    for(let i = inicio; i <= fin; i++){
        suma += i;
    }
    return suma
}
console.log(contarRango(0, 10)) 
console.log(contarRango(12, 14)) 
console.log(contarRango(5, 5)) 