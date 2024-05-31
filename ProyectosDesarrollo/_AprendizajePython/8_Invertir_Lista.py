def reverse_list(lista):
    inicio, fin = 0, len(lista) -1
    while inicio<fin:
        lista[inicio],lista[fin]=lista[fin],lista[inicio]
        
        inicio += 1
        fin -=1
    return lista

lista_original = [1,2,3,4,5]
print(reverse_list(lista_original))