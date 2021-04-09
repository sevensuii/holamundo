from random import randint

def rellena(fil, col):
    '''
        Inicializa la matriz a 1\n
        fil, numero de filas de la matriz\n
        col, numero de columnas de la matriz
    '''
    matrix = []

    for i in range(fil):
        a = []
        for j in range(col):
            a.append(1)
    
        matrix.append(a)

    return matrix

def rellenaManual(fil, col):
    '''
        fil: numero de filas de la matriz a rellenar\n
        col: numero de columnas de la matriz a rellenar
    '''
    matrix = []

    for i in range(fil):
        a = []
        for j in range(col):
            num = int( input("Enter pos "+str(i)+","+str(j)+": "))
            a.append(num)
    
        matrix.append(a)

    return matrix

def matrixAleatoria(fil, col):
    '''
        fil, numero de filas de la matriz rellenada aleatoriamente\n
        col, numero de columnas de la matriz rellenada aleatoriamente
    '''
    matrix = []

    for i in range(fil):
        a = []
        for j in range(col):
            num = randint(0, 50)
            a.append(num)
    
        matrix.append(a)

    return matrix

def muestraMatriz(matriz):
    '''Print a given matrix'''
    for i in range(len(matriz)):
        for j in range(len(matriz[i])):
            print(str(matriz[i][j]), end="\t")
        print()