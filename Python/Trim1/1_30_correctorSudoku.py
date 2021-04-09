from numpy import array
from numpy.core.fromnumeric import compress

def impMatriz(mat):
    for i in range(len(mat)):
        print()
        for j in range(len(mat[i])):
            print(mat[i][j], end="\t")

def compruebaFila(fila):
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for i in fila:
        if i in array:
            array.remove(i)
    if len(array):
        return False
    return True

def compruebaCol(mat, col):
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    for i in range(len(mat[col])):
        num = mat[i][col]
        if num in array:
            array.remove(num)
    if len(array):
        return False
    return True

def compruebaRegion(mat, reg, fil, col):
    for i in range(len(reg)):
        if reg[i][0] <= fil and fil <= reg[i][1]:
            for j in range(len(reg[i])):
                if reg[i][2] <= col and col <= reg[i][3]:
                    for x in range(reg[i][0], reg[i][1] +1):
                        print("-------------------")
                        for y in range(reg[i][2], reg[i][3] +1):
                            print("| ", mat[x][y], end="  ")
                        print("|")
                    print("-------------------")

                break


# Comienza programa principal
matriz=[[4, 2, 6, 5, 7, 1, 3, 9, 8],
        [8, 5, 7, 2, 9, 3, 1, 4, 6],
        [1, 3, 9, 4, 6, 8, 2, 7, 5],
        [9, 7, 1, 3, 8, 5, 6, 2, 4],
        [5, 4, 3, 7, 2, 6, 8, 1, 9],
        [6, 8, 2, 1, 4, 9, 7, 5, 3],
        [7, 9, 4, 6, 3, 2, 5, 8, 1],
        [2, 6, 5, 8, 1, 4, 9, 3, 7],
        [3, 1, 8, 9, 5, 7, 4, 6, 2]]
valida = True

for i in range(len(matriz)):
    if compruebaFila(matriz[i]) == False:
        valida = False
        global posi
        posi = i
    if compruebaCol(matriz, i) == False:
        valida = False
        global posj
        posj = i
    

if valida:
    print("La matriz aportada es totalmente correcta")
else:
    print("La matriz aportada es incorrecta")
    regiones = [[0, 2, 0, 2], [0, 2, 3, 5], [0, 2, 6, 8],
                [3, 5, 0, 2], [3, 5, 3, 5], [3, 5, 6, 8],
                [6, 8, 0, 2], [6, 8, 3, 5], [6, 8, 6, 8]] #[filInicio, filFin, colInicio, colFin]
    print("El error se encuentra en: ")
    compruebaRegion(matriz, regiones, posi, posj)
