// Promesas setTimeout
let miPromesa = new Promise((resolve, rejected) =>{
    let expression = true;
    if(expression)
        resolve('Resolvió correcto');
    else
        rejected('Se produjo un error')
});

let promesa = new Promise((resolve)=>{
    console.log('Inicio promesa')
    setTimeout(()=> resolve('Saludos con promesa y timeout'), 3000);
    console.log('Fin promesa')
});

promesa.then(valor => console.log(valor));