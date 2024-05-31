// Precedencia de operadores
/*
    1. Parentesis y corchetes (), {}, []
    2. Operadores unarios como -, ++, --, !
    3. Aritmeticos *, /, %
    4. Aritmeticos +, - 
    5. Relacionales <, <=, > y >=
    6. Igualdad ==, !=
    7. Logicos &&, ||
    8. Asignacion =, =+, -=, etc
*/

// Ejemplo, se verifica de izquierda a derecha
 let aa = 12 / 3 + 2 * 3 -1;
// Paso 1. 12/3=4
// Paso 2. 2*3=6
// Paso 3. 4+6=10
// Paso 4. 10-1=9
 console.log(aa)

// Aritmeticos:  +, -, *, /, %(residuo division) ,** ,++ ,--
let a = 8;
let b = 3;
let c = 0;
console.log(a);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b); // Potencia (ES2016 - ECMAScript 2016)
console.log(++a);
console.log(a++);
console.log(--b);
console.log(b--);
// Versiones anteriores a 2016 - Potencia
a = 8
b = 3
console.log(Math.pow(a,b));
// Incremento y Decremento
a = 0;
console.log(a);
// Pre-incremento
++ a ;
console.log(a);
// Post-incremento
a ++ ;
console.log(a);
// Pre-decremento
-- a;
console.log(a);
// Post-decremento
a --;
console.log(a);
// Ejemplo
a = 5;
b = 2;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);
c = a*b;
console.log(c)

// Asignacion =
let d = 12; 
console.log(d)
// Asignacion compuesta +=, -=, *=, /=, %=, **=
d += 3;
console.log(d)
d -= 3;
console.log(d)
d *= 3;
console.log(d)
d /= 3;
console.log(d)
d %= 5;
console.log(d)
d **= 2;
console.log(d)

// Operadores relacionales o de comparacion ==, ===, !=, !==, >, >=, <, <=
let e = 0;
let f = 1;
let g = 0;
let h = '0'

// Iguales sin tener en cuenta el tipo de dato
console.log("e == f ->", e==f)
console.log("e == g ->", e==g)
console.log("e == h ->", e==h)
// Iguales teniendo en cuenta el tipo de dato
console.log("e === f ->", e===f)
console.log("e === g ->", e===g)
console.log("e === h ->", e===h)
// Valores distintos sin tener en cuenta el tipo de dato
console.log("e != f ->", e!=f)
console.log("e != g ->", e!=g)
console.log("e != h ->", e!=h)
// Valores distintos y con distinto tipo de dato
console.log("e !== f ->",e!==f);
console.log("e !== g ->",e!==g)
console.log("e !== h ->",e!==h)
// Mayor que
console.log("e > f ->",e>f);
console.log("e > g ->",e>g)
console.log("e > h ->",e>h)
// Mayor o igual que
console.log("e >= f ->",e>=f);
console.log("e >= g ->",e>=g)
console.log("e >= h ->",e>=h)
// Menor que
console.log("e < f ->",e<f);
console.log("e < g ->",e<g)
console.log("e < h ->",e<h)
// Menor o igual que
console.log("e <= f ->",e<=f);
console.log("e <= g ->",e<=g)
console.log("e <= h ->",e<=h)

/* 
    && and (Y)...regresa verdadero si ambos valores logicos son verdaderos / expresion de corto circuito
     |  x   | && |   y  | result |
     | true | && | true |  true  |
     | true | && | false|  false |
     | false| && | true | false  |
     | false| && | false| false  |
*/

x = 1;
y = 2;

console.log(`${x} es menor o igual que ${y} y ${y} es mayor que ${x} ${x<=y && y>x}`)// acento invertido = Alt + 96

/* 
    || or (O)...regresa verdadero si cualquiera de los operandos es verdadero
     |  x   | || |   y  | result |
     | true | && | true |  true  |
     | true | && | false|  true  |
     | false| && | true |  true  |
     | false| && | false|  false |
*/
x= 1;
y= 2;

console.log(`${x} es mayor que ${y} y ${y} es menor que ${x} ${x>y || y<x}`)// acento invertido = Alt + 96

/*
    ! not (NO)... invierte el resultado logico v a f y f a v   operador unario
     |   !  |   x  | result |
     | true | true |  false |
     | true | false|  true  |
*/
x = true
console.log(`${a} a es positivo ${!a}`)


// Ejemplo operadores con rango
// DEclaramos las variables que vamos a utilizar
let minimo = 0, maximo = 5;
let dato = 3;

//  Primero con una sola condicion
let dentroRango = dato>=minimo 
console.log(dentroRango)

// Ahora con  dos condiciones a la vez
let dentroRangoDobleCondicion = dato >= 0 && dato <=5
console.log(dentroRangoDobleCondicion)


