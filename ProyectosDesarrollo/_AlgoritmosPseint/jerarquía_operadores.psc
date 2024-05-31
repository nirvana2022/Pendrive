Algoritmo jerarquía_operadores
	// 1. Paréntesis (se ejecutan primero los más internos).
	// 2. Signo (-2), si un valor es positivo o negativo.
	// 3. Potencias (^) y Raíces (sqrt); Productos y Divisiones (* y /), en este mismo orden.
	// 4. Sumas y Restas (+ y -).
	// 5. Concatenación (+).
	// 6. Relaciónales (=, <, >).
	// 7. Negación (no).
	// 8. Conjunción (y).
	// 9. Disyunción (o).
	Escribir (7+8)
	Escribir (2+15*16+3^2)/4+5
	Escribir(2+(7+8)*16+3^2)/4+5
	Escribir raiz(6^2/2+7)/8^2
FinAlgoritmo
