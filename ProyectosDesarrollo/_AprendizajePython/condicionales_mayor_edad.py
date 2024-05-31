edad = int(input("Por favor ingrese su edad:  "))
mensaje = ""

if edad >= 18:
    mensaje = "Usted es mayor de edad"
else:
    mensaje = "Usted es menor de edad"

print(mensaje)