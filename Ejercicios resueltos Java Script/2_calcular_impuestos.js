// Función para calcular impuestos
const calcularImpuestos = function(edad = new Number,ingresos = new Number){
    resultado = new Number
    if (edad >= 18){
    if(ingresos >= 1000){
        resultado = ingresos * 40 / 100
        return resultado}
    else{
        return 0} 
    }
    else{
        return 0
    }
}

console.log(calcularImpuestos(18,1000))
console.log(calcularImpuestos(40, 10000))
console.log(calcularImpuestos(17,5000))
console.log(calcularImpuestos(30,500))
