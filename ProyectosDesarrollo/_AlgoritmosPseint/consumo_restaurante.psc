Algoritmo consumo_restaurante
	Definir consumo_cliente, pago_cliente, total_pagos Como Real
	total_pagos <- 0
	
	Repetir
		Escribir "Ingrese el consumo del cliente o 0 para finalizar: "
		Leer consumo_cliente
		
		Si consumo_cliente <> 0 Entonces
			Si consumo_cliente >50000 Entonces
				pago_cliente <- consumo_cliente - (consumo_cliente*0.20)
			Sino 
				pago_cliente <- consumo_cliente
			FinSi
		
			total_pagos <- total_pagos + pago_cliente
			Escribir "El pago del cliente es: ", pago_cliente
		FinSi
	Hasta Que consumo_cliente = 0 
	Escribir "El total de todos los pagos es: ", total_pagos
FinProceso
