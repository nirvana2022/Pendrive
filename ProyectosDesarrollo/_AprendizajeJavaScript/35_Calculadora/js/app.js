// Funciones JavaScript Calculadora
console.log('Aplicación Calculadora Ejecutandose...');

// Función sumar para calculadora -> Con conversión de datos string de HTML a enteros:
function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = 'La operación no incluye números'
    document.getElementById('resultado').innerHTML =`Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`)
}
