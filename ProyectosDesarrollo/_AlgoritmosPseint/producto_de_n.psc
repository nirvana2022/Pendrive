Algoritmo producto_de_n
	Definir N, producto, i Como Entero
	Escribir 'Ingrese un n�mero entero positivo N: '
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
		Escribir 'El n�mero ingresado no es v�lido. Por favor, ingrese un n�mero entero positivo.'
	FinSi
FinAlgoritmo
