Algoritmo numero_par
	Escribir 'Por favor ingrese un número'
	Leer numero
	num_ingresado <- numero
	residuo <- num_ingresado MOD 2
	Si residuo>=0 Entonces
		Si residuo<>0 Entonces
			Escribir 'El numero es impar'
		SiNo
			Escribir 'El numero es par'
		FinSi
	SiNo
		Escribir 'El numero ingresado es negativo'
	FinSi
FinAlgoritmo
