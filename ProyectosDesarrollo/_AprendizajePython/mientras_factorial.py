def mientras_factorial(numero):
    contador = 1
    factorial = 1
    while contador <= numero:
        factorial = factorial * contador
        contador = contador + 1
    return (factorial)
res_factorial = (mientras_factorial(5))
print(res_factorial)
