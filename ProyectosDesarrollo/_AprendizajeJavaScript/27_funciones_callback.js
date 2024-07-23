// Funciones callback en Java Script -> Llamar una función dentro de otra función
function miFuncion1(){
    console.log('funcion 1')
}
function miFuncion2(){
    console.log('funcion 2')
}

miFuncion1();
miFuncion2();


// Función call back

/*let imp = */function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1,op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback('Resultado: '+res);
}

sumar(5,3, imprimir);

