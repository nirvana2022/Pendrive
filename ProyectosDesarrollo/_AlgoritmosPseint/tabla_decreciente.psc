Algoritmo tabla_decreciente
	Definir numero, resultado, i Como Entero
	Escribir 'Ingrese un n�mero entre 1 y 10: '
	Leer numero
	Si numero>=1 Y numero<=10 Entonces
		Escribir 'Tabla de multiplicar decreciente de ', numero, ':'
		Para i<-10 Hasta 1 Con Paso -1 Hacer
			resultado <- numero*i
			Escribir numero, ' x ', i, ' = ', resultado
		FinPara
	SiNo
		Escribir 'El n�mero ingresado est� fuera del rango v�lido.'
	FinSi
FinAlgoritmo
