Algoritmo PROYECCION_GANACIA
	Escribir 'Ingrese el capital'
	Leer capital
	Escribir 'Ingrese el interes'
	Leer tasa_interes_anual
	Escribir 'Ingrese la cantidad de años'
	Leer anios
	capital_acumulado <- capital
	anios_pasados <- 0
	Mientras capital_acumulado<capital*2 Y anios_pasados<anios Hacer
		capital_acumulado <- capital_acumulado+capital_acumulado*(tasa_interes_anual/100)
		anios_pasados <- anios_pasados+1
	FinMientras
	Si capital_acumulado>=capital*2 Entonces
		Escribir 'El capital se duplicará al transcurrir: ', anios_pasados, ' años'
	FinSi
FinAlgoritmo
