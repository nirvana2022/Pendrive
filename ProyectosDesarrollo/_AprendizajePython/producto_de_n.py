def producto_de_n():
    try:
        N = int(input("Ingrese un número entero positivo N: "))
        if N >= 0:
            producto = 1
            print("Iteraciones:")
            for i in range(1, N+1):
                if i < N:
                    print(producto, "*", (i + 1), " = ", producto * (i + 1))
                producto *= (i + 1)
            print("El producto desde 1 hasta", N, "es:", producto / (N + 1))
        else:
            print("El número ingresado no es válido. Por favor, ingrese un número entero positivo.")
    except ValueError:
        print("Por favor, ingrese un número entero válido.")

producto_de_n()