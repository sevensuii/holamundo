import random

tam = int( input("Introduzca el tamaño de la matriz de Pascal: "))

matriz = []

for i in range(tam):
    a = []
    for j in range(tam):
        a.append(1)
    
    matriz.append(a)


for i in range(tam):
    for j in range(tam):
        if not i  or not j:
            None
        else:
            matriz[i][j] = matriz[i-1][j] + matriz[i][j-1]

        print(matriz[i][j], end="\t")
    print()