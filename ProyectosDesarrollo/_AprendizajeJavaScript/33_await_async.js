// Await y async en Java Script
let miPromesa = new Promise((resolve, rejected) =>{
    let expression = true;
    if(expression)
        resolve('Resolvió correcto');
    else
        rejected('Se produjo un error')
});

let promesa = new Promise((resolve)=>{
    //console.log('Inicio promesa')
    setTimeout(()=> resolve('Saludos con promesa y timeout'), 3000);
    //console.log('Fin promesa')
});

//async inidia que una función regresa una promesa
async function miFunctionConPromesa(){
    return 'saludos con promesa y async'
}

//miFunctionConPromesa().then(valor =>  console.log(valor));

//async con await
async function miFunctionConPromesaYAwait(){
    let miPromesa = new Promise(resolve => {
        resolve('Promesa con await')
    });
    console.log(await miPromesa);
}

miFunctionConPromesaYAwait();