def calcular_pago(consumo):
    if consumo > 50000:
        descuento = consumo * 0.20
        total_pago = consumo - descuento
    else:
        total_pago = consumo
    return total_pago

def main():
    total_pagos = 0

    while True:
        try:
            consumo_cliente = float(input("Ingrese el consumo del cliente (o 0 para terminar): "))
        except ValueError:
            print("Por favor, ingrese un número válido.")
            continue
        
        if consumo_cliente == 0:
            break
        
        pago_cliente = calcular_pago(consumo_cliente)
        total_pagos += pago_cliente

        print(f"El pago del cliente es: {pago_cliente}")

    print(f"\nEl total de todos los pagos es: {total_pagos}")

if __name__ == "__main__":
    main()