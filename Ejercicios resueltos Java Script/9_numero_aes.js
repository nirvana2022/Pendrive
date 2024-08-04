// Contar letras
const numeroDeAes = function(cadena) {
    let contador = 0;
  
    // Iterar sobre cada carácter en la cadena
    for (const caracter of cadena) {
      // Incrementar el contador si el carácter es "a"
      if (caracter === 'a') {
        contador++;
      }
    }
  
    return contador;
  };
  
  // Código de prueba
  console.log(numeroDeAes("abracadabra")); // 5
  console.log(numeroDeAes("etinol")); // 0
  console.log(numeroDeAes("")); // 0