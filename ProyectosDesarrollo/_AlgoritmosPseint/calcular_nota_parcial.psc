Algoritmo calcular_nota_parcial
	Escribir 'Ingrese las notas: taller1, taller2, quiz y examen parcial una a la vez'
	Leer nota_taller1, nota_taller2, nota_quiz, examen_parcial
	nota_30 <- (((nota_taller1+nota_taller2+nota_quiz)/3)*30/100)
	nota_70 <- ((examen_parcial*70)/100)
	nota_final <- nota_30+nota_70
	Escribir 'La nota correspondiente es: ', nota_final
FinAlgoritmo
