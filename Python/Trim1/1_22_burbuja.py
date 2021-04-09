import random

array = []
for i in range(25): # Se rellena un vector aleatoriamente
    array.append(random.randint(-100, 100))

print(array, end="\n\n")

for i in range(1, len(array)):               #  no se llega a recorrer n^2 veces, siempre que el for j termina
    for j in range(len(array) - i):          #   una ejecución, la siguiente vez se ejecutara una vez menos
        if int( array[j] ) > int( array[j+1] ):
            array[j], array[j+1] = array[j+1], array[j]

print("El array ordenado es:\n", array)        
