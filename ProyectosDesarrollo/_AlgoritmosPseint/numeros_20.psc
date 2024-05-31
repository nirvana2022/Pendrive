Proceso numeros_20
    Escribir "Ingrese 20 números:"
    menores_25 <- ""  
    mayores_25 <- ""  
    
    Para i <- 1 Hasta 20 Con Paso 1 Hacer
        Escribir "Ingrese el número ", i, ":"
        Leer num
        Si num <= 25 Entonces
            menores_25 <- menores_25 + " " + CONVERTIRATEXTO(num) 
        Sino
            mayores_25 <- mayores_25 + " " + CONVERTIRATEXTO(num) 
        FinSi
    FinPara
    
    Escribir "Números menores o iguales a 25:", menores_25
    Escribir "Números mayores a 25:", mayores_25
FinProceso

