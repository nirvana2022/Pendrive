Algoritmo producto_de_n
	Definir N, producto, i Como Entero
	Escribir 'Ingrese un número entero positivo N: '
	Leer N
	Si N>=0 Entonces
		producto <- 1
		Escribir 'Iteraciones:'
		Para i<-1 Hasta N Con Paso 1 Hacer
			Si i<N Entonces
				Escribir producto, '*', (i+1), ' = ', producto*(i+1)
			FinSi
			producto <- producto*(i+1)
		FinPara
		Escribir 'El producto desde 1 hasta ', N, ' es: ', producto/(N+1)
	SiNo
		Escribir 'El número ingresado no es válido. Por favor, ingrese un número entero positivo.'
	FinSi
FinAlgoritmo
