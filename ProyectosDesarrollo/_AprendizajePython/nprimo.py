numero = int(input("¿Ingresa un número"))
valor = range(2,numero)
contador = 0
for n in valor:
    if numero % n == 0:
        contador +- 1
        print("divisor:", n)
if contador > 0:
    print("El número no es primo")
else:
    print("El número es primo")