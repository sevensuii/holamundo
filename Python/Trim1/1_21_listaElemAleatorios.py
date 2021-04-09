import random

array = []
for i in range(125):
    array.append(random.randint(-50, 50))

print(array)
buscar = int(input("Introduza el numero entero a buscar: "))

# Busca el valor en la lista e imprime sus posiciones
pos = []
for i in range(len(array)):
    if array[i] == buscar:
        pos.append(i)

if len(pos):
    print("El numero se encuentra en las posiciones: ", pos)
    #for i in range(len(pos)):
    #    print(pos[i], end=", ")
else:
    print("El numero no se encuentra en la lista")

print()

# Llena otra lista con los elementos de las posiciones impares del vector
arrImpar = []
for i in range(len(array)):
    if i%2:
        arrImpar.append(array[i])
print(arrImpar)

# Multiplos de 3 y >0
mult = 0
for i in range(len(arrImpar)):
    if not arrImpar[i]%3 and arrImpar[i] > 0:
        mult += 1

print("Hay "+ str(mult)+ " multiplos de 3 y positivos")