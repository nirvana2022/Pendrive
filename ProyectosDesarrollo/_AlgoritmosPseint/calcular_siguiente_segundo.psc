Proceso calcular_siguiente_segundo
    Definir hora, minutos, segundos, hora_siguiente, minutos_siguiente, segundos_siguiente Como Entero
	
    Escribir "Ingrese la hora (0-23): "
    Leer hora
    Escribir "Ingrese los minutos (0-59): "
    Leer minutos
    Escribir "Ingrese los segundos (0-59): "
    Leer segundos
	
    Si (hora >= 0 Y hora <= 23) Y (minutos >= 0 Y minutos <= 59) Y (segundos >= 0 Y segundos <= 59) Entonces
        segundos <- segundos + 1
		
        Si segundos = 60 Entonces
            segundos <- 0
            minutos <- minutos + 1
            Si minutos = 60 Entonces
                minutos <- 0
                hora <- hora + 1
                Si hora = 24 Entonces
                    hora <- 0
                FinSi
            FinSi
        FinSi
		
        Escribir "La hora en el siguiente segundo es: ", hora, ":", minutos, ":", segundos
    Sino
        Escribir "Los valores ingresados están fuera del rango permitido."
    FinSi
FinProceso