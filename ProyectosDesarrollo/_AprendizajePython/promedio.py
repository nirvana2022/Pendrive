def promedio_calificaciones():
        
    valores = []
       
    while True:
        valor = int(input("Calificación: "))
        if valor ==  0:
            break 
        else:
            valores.append(valor)
            
    average = valores / len(valores)
            
    print("Tu promedio es de:",average)   
    print(valores) 