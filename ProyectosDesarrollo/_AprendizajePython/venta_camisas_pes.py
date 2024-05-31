print("<-----Bienvenido----->")
total_venta_pesos = 0
for i in range (1,6):
    vr_camisa = float(input(f"Ingrese el valor de la camisa {i}: "))
    dolar_actual = 3822
    precio_venta = vr_camisa * dolar_actual
    total_venta_pesos = total_venta_pesos + precio_venta
    
print(f"el valor de la compra es de ${int(total_venta_pesos)} colombianos")

