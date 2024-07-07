let entero = parseInt(prompt("Ingrese un número: "));
let residuo = entero % 2;

if (entero < 0) {
    alert(`${entero} es negativo.`);
} else {
    if (residuo != 0) {
        alert(`${entero} es impar.`);
    } else {
        alert(`${entero} es par.`);
    }
}