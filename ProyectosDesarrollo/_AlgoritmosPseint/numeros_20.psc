Proceso numeros_20
    Escribir "Ingrese 20 n�meros:"
    menores_25 <- ""  
    mayores_25 <- ""  
    
    Para i <- 1 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el n�mero ", i, ":"
        Leer num
        Si num <= 25 Entonces
            menores_25 <- menores_25 + " " + CONVERTIRATEXTO(num) 
        Sino
            mayores_25 <- mayores_25 + " " + CONVERTIRATEXTO(num) 
        FinSi
    FinPara
    
    Escribir "N�meros menores o iguales a 25:", menores_25
    Escribir "N�meros mayores a 25:", mayores_25
FinProceso

