def calcular_siguiente_segundo(hora, minutos, segundos):
    segundos += 1

    if segundos == 60:
        segundos = 0
        minutos += 1
        if minutos == 60:
            minutos = 0
            hora += 1
            if hora == 24:
                hora = 0
    
    return hora, minutos, segundos

# Solicitar al usuario que ingrese la hora, minutos y segundos
hora = int(input("Ingrese la hora (0-23): "))
minutos = int(input("Ingrese los minutos (0-59): "))
segundos = int(input("Ingrese los segundos (0-59): "))

# Verificar si los valores ingresados están dentro del rango permitido
if 0 <= hora <= 23 and 0 <= minutos <= 59 and 0 <= segundos <= 59:
    # Calcular la hora en el siguiente segundo
    hora_siguiente, minutos_siguiente, segundos_siguiente = calcular_siguiente_segundo(hora, minutos, segundos)
    
    # Mostrar la hora en el siguiente segundo
    print(f"La hora en el siguiente segundo es: {hora_siguiente}:{minutos_siguiente}:{segundos_siguiente}")
else:
    print("Los valores ingresados están fuera del rango permitido.")