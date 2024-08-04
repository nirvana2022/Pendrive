// Calcular indice de masa corporal
const bmi = function(peso, altura){
    let imc = parseFloat(peso) / parseFloat(altura)**2 
    console.log(imc);
    if (imc < 18.5){
        return 'Bajo de peso'}
    if(imc >= 18.5 && imc <= 24.9){
        return 'Normal'}
    if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso'}
    if(imc >= 30){
        return('Obeso')}
    
}
console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))
console.log(bmi(135, 1.7))