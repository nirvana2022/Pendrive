// Manejo de errorres con try catch finally y throw
"use strict"
// Como recuperarnos de este error 

try{
    let x = 10;
    //x = 10; 
    //miFuncion();
    throw 'Mi error'
}
catch(error){
    console.log(error);
}
finally{
    console.log('Termina la revisión de errores...')
}

console.log('Continuamos...');


//Ejemplo
let resultado = 5;

try{
    //x = 5;
    if(isNaN(resultado)) throw 'No es un número';
    else if (resultado === '') throw 'Es cadena vacia'
    else if (resultado < 0) throw 'Es un número negativo'
    //else if (resultado.length < 8 ) throw 'El largo de la contraseña debe ser de 8'
}
catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);

}
finally{
    console.log('Termina revisión de errores')
}