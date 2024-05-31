def tabla_multiplicar_decreciente():
    try:
        numero = int(input("Ingrese un número entre 1 y 10: "))
        if 1 <= numero <= 10:
            print(f"Tabla de multiplicar decreciente de {numero}:")
            for i in range(10, 0, -1):
                resultado = numero * i
                print(f"{numero} x {i} = {resultado}")
        else:
            print("El número ingresado está fuera del rango válido.")
    except ValueError:
        print("Por favor, ingrese un número válido.")

tabla_multiplicar_decreciente()