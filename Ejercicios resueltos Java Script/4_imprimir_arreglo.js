// Imprimir un arreglo
const imprimirArreglo = function(...elementos) {
    for (let i = 0; i < elementos.length; i++) {
      console.log(`// ${elementos[i]}`);
    }
  };
  
imprimirArreglo(1, "Hola", 2, "Mundo");