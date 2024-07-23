// Función set time out en Java Script

//Llamadas asincronas con setTimeout

function miFuncionCallback(){
    console.log('Mensaje asincrono después de 3 segundos');
    
}

setTimeout(miFuncionCallback,3000); // después de 3 segundos

setTimeout(function(){console.log('saludo asincrono 2')}, 4000);

setTimeout( ()=> console.log('saludo asincrono 3'),5000);