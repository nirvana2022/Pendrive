# Entrada
nota_taller1 = int(input("Ingrese la nota del taller 1: "))
nota_taller2 = int(input("Ingrese la nota del taller 2: "))
nota_quiz = int(input("Ingrese la nota del quiz: "))
examen_parcial = int(input("Ingrese la nota del examen_parcial: "))

# Proceso
nota_30 = (((nota_taller1+nota_taller2+nota_quiz)/3)*30/100)
nota_70 = examen_parcial*70/100
nota_final = round(nota_30+nota_70)

# Salida
print(" La notacorrespondiente es: ", nota_final)