def menu():
    print("#############################################################")
    print("##  1.) Insertar Matriz A                                  ##")
    print("##  2.) Insertar Matriz B                                  ##")
    print("##  3.) Sumar Matrices A+B                                 ##")
    print("##  4.) Restar Matrices A-B                                ##")
    print("##  5.) Multiplicar Matrices A*B(comprobar si es posible)  ##")
    print("##  6.) Obtener la traspuesta de la Matriz A               ##")
    print("##  7.) Obtener la traspuesta de la Matriz B               ##")
    print("##  8.) Obtener el valor máximo y mínimo de la Matriz A    ##")
    print("##  9.) Obtener el valor máximo y mínimo de la Matriz B    ##")
    print("## 10.) Imprimir Matriz A                                  ##")
    print("## 11.) Imprimir Matriz B                                  ##")
    print("## 12.) Salir                                              ##")
    print("#############################################################")

#def crearMatriz(n, m):
#    matriz = []
#    for i in range(n):
#        a = [0]*m
#        matriz.append(a)
#
#    return matriz

def creaRellenaMatriz(n, m):    # Crea y rellena una matriz
    mat = []
    for i in range(n):
        a = [0]*m
        mat.append(a)

    print("Rellena tu Matriz: ")

    for i in range(n):
        for j in range(m):
            print("Introduzca la posicion {i}{j}: ")
            b = int(input())
            mat[i][j] = b

    return mat

def matrizCorrecta(mat):    # Nos dice si una matriz es correcta
    filas = len(mat)
    columnas = len(mat[0])
    correcto = True
    i = 1
    while i < filas and correcto:
        correcto = (len(mat[i]) == columnas)
        i += 1
    return correcto

def filas(mat): # Nos dice el numero de filas de una matriz correcta
    if matrizCorrecta(mat):
        return len(mat)

def columnas(mat):  # Nos dice el numero de columnasd e una matriz correcta
    if matrizCorrecta(mat):
        return len(mat[0])

def matrizIdentidad(mat)



#def sumaMatriz(mat1, mat2):


########
# MAIN #
########

