import random
minusculas ="abcdefghijklmnopqrstuvwxyz"
mayusculas ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
simbolos ="!#$%/()=?¡.,]^*"

def crear_pass(longitud):
    todo_caracteres = minusculas + mayusculas + simbolos
    password = ""
    for _ in range(longitud):
        password += random.choice(todo_caracteres)
    return password

nuevo_pass = crear_pass (10)
print(nuevo_pass)
