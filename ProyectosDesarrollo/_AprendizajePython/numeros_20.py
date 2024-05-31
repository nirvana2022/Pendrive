
menores_iguales_25= ""
mayores_25= ""

for i in range (1,21):
    num = float(input(f"Ingrese el número {i} "))
    if num <= 25:
        menores_iguales_25 += " " +str(num)
    else:
        mayores_25 += " " +str(num)
    
print("Números menores o iguales: ", menores_iguales_25)
print("Números mayores a 25: ", mayores_25)
