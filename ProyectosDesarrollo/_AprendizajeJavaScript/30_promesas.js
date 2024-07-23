// Promesas en Java Script -> promesa es un estado
let miPromesa = new Promise((resolve, rejected) =>{
    let expression = true;
    if(expression)
        resolve('Resolvió correcto');
    else
        rejected('Se produjo un error')
});

miPromesa.then(
    valor => console.log(valor),
    error => console.log(error)
);

miPromesa
.then( valor => console.log(valor))
.catch(error=>console.log(error));
