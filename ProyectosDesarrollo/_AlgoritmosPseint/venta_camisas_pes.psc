Algoritmo venta_camisas_dolar
	Escribir '<-----------Bienvenido------->'
	Para i<-1 Hasta 5 Con Paso 1 Hacer
		Escribir 'Ingrese el precio de la camisa: ', i, ':'
		Leer precio_camisa
		dolar_actual <- 3822
		precio_venta <- precio_camisa*dolar_actual
		total_venta_pesos <- total_venta_pesos+precio_venta
	FinPara
	Escribir 'El precio total de la venta en pesos es: ', total_venta_pesos
FinAlgoritmo
