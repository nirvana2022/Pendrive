// Funciones flecha
// funcion anónima
let miFuncion = function(){
    console.log('Bienvenido')
}
// función flecha - se puede modificar
let miFuncionFlecha = () => {
    console.log('Bienvenido a la función flecha')
}
// función flecha - ya no se puede modificar
// ctrl + k +c   comentarear código
const miFuncionFlecha2 = () => {
    console.log('Bienvenido a la función flecha')
}

const miFuncionFlecha3 = () => console.log('Saludos');

const saludar = () => {
    return 'Saludos desde función flecha'
}

const saludarsimplificado = () => 'Saludos desde función flecha simplificado'

const regresaObjeto = () => ({nombre: 'Juan', apellido: 'lara'});
console.log(regresaObjeto());

const funcionConParametros = (mensaje) => console.log(mensaje);
funcionConParametros('Saludos desde función con parámetros');

const funcionConParametrosClasico = function(mensaje){
    console.log(mensaje);
}

const funcionUnParametro = mensaje => console.log(mensaje);
funcionUnParametro('Saludos desde función con un solo parámetro');

//const funcionConVariosParametros = (op1, op2) => op1 + op2;

const funcionVariosParametros = (op1, op2) => {let resultado = op1 + op2; return `Resultado de: ${op1} + ${op2} = ${resultado}`;} ;
console.log(funcionVariosParametros(5,10));

miFuncion();
miFuncionFlecha();
miFuncionFlecha2();
miFuncionFlecha3();
console.log(saludar());
console.log(saludarsimplificado());

