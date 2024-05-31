Algoritmo numero_mayor_sofisticado
	Escribir "Ingrese el número 1: "
	Leer num1
	Escribir "Ingrese el número 2: "
	Leer num2
	
	Si num1 = num2 Entonces
		Escribir "Los números ingresados son iguales"
	SiNo
		Si num1 > num2 Entonces
			Escribir "El número mayor es: ", num1
		SiNo
			Escribir "El número mayor es: ", num2
		Fin Si
	Fin Si
	
FinAlgoritmo
