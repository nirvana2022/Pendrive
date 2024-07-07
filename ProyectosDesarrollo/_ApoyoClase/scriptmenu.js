
alert("Seleccione una de las opciones para calcular una figura:\n" +
    "1. Calcular Área Triángulo\n" +
    "2. Calcular Perimetro Triangulo\n" +
    "3. Calcular Area del cuadrado\n"+
    "4. Calcular Perimtero del cuadrado\n"+
    "5. Salir"
);

let opcion = parseInt(prompt("Ingrese una opcion: "));

switch(opcion){
    case 1:
        alert(`Calcule el área del triangulo`);
        var base = parseInt(prompt("Ingrese la base del triangulo"));
        var altura = parseInt(prompt("Ingrese la altura del triangulo"));
        var areaTriangulo = base*altura/2
        alert(`el area del triangulo es: ${areaTriangulo} `);
        break;
    case 2:
        alert(`Calcule el perimetro del triangulo`);
        var ladoA = parseInt(prompt("Ingrese el lado A"));
        var ladoB = parseInt(prompt("Ingrese el lado B"));
        var ladoC = parseInt(prompt("Ingrese el lado C"));
        var perimetroTriangulo = ladoA+ladoB+ladoC
        alert(`el perimetro del triangulo es: ${perimetroTriangulo} `);
        break;
    case 3:
        alert(`Calcule el área del cuadrado`);
        var ladoCuadrado = parseInt(prompt("Ingrese la longitud del cuadrado"));
        var areaCuadrado = Math.pow(ladoCuadrado,2);
        alert(`el area del cuadrado es: ${areaCuadrado} `);
        break;
    case 4:
        alert(`Calcule el perimetro del cuadrado`);
        var ladoCuadrado = parseInt(prompt("Ingrese la longitud del lado del cuadrado"));
        var perimetroTriangulo = 4 * ladoCuadrado 
        alert(`el perimetro del cuadrado es: ${areaCuadrado} `);
        break;
    case 5:
        alert(`Calcule el área del `)
    
    default: 
        alert(`opcion no valida contacte al desarrollador`);
        break;
}

