capital = (float(input("Ingrese el capital con el que cuenta: ")))
tasa_interes_anual = (float(input("Ingrese la tasa de interes anual actual: ")))
anios =int(input("Ingrese la cantidad de años máxima: "))
capital_acumulado = capital
anios_pasados = 0
while capital_acumulado < (capital*2)and anios_pasados < anios :
    capital_acumulado = capital_acumulado + capital_acumulado * (tasa_interes_anual/100)
    anios_pasados = anios_pasados + 1
if capital_acumulado >= capital*2:
    print("El capital se duplicará al transcurrir: ", anios_pasados," años")
