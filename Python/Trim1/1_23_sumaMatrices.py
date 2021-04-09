#from funciones.opmatrices import *

def rellenaManual(fil, col):
    '''
        fil, numero de filas de la matriz
        col, numero de columnas de la matriz
    '''
    matrix = []

    for i in range(fil):
        a = []
        for j in range(col):
            num = int( input("Enter pos "+str(i)+","+str(j)+": "))
            a.append(num)
    
        matrix.append(a)

    return matrix

def muestraMatriz(matriz):
    '''Print a given matrix'''
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            print(str(matriz[i][j]), end="\t")
        print()

filA = int( input("Introduzca las filas de la matriz A: "))
colA = int( input("Introduzca las columnas de la matriz A: "))

matA = rellenaManual(filA, colA)

filB = int( input("Introduzca las filas de la matriz B: "))
colB = int( input("Introduzca las columnas de la matriz B: "))

matB = rellenaManual(filB, colB)

print("Muestra la matriz A")
muestraMatriz(matA)
print("Muestra la matriz B")
muestraMatriz(matB)
print()

matC = []

if int(filA) == int(filB) and int(colA) == int(colB):
    for i in range(filA):
        a = []
        for j in range(colB):
            suma = matA[i][j] + matB[i][j]
            a.append(suma)
        matC.append(a)
    print("Muestra la matriz de la suma")
    muestraMatriz(matC)
else:
    print("No es posible realizar la suma O.o")
