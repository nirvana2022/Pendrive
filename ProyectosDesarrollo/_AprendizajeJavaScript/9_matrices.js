// Matrices -> Arreglos de de 2 dimensiones
let matriz = [[1,2,3],[4,5,6],[7,8,9],[0,1,1]];
console.log(matriz[0][0]);
console.log(matriz[1][1]);
console.log(matriz[2][0]);
console.log(matriz[3][0]);
console.log(matriz[2][1]);
console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);
console.log(matriz[3]);


// Renglones
console.log(matriz.length);
// Columnas
console.log(matriz[0].length);
console.log(matriz[1].length);
console.log(matriz[2].length);
console.log(matriz[3].length);

// Recorrer renglones matriz
for(let ren = 0; ren < matriz.length; ren++){
    // Recorrer columnas matriz
    for(let col = 0; col < matriz[ren].length; col++){
        console.log(`Elemento [${ren}][${col}] = ${matriz[ren][col]}`)
        console.log(matriz[ren][col]);
    }
}

