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

def crearMatriz(n, m):
    matriz = []
    for i in range(n):
        a = [0]*m
        matriz.append(a)

    return matriz

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

def matrizIdentidad(n):
    m = crearMatriz(n, n)
    for i in range(n):
        m[i][i] = 1
    return m

def copy(m):
    result = []
    for f in m:
        result.append(f[:])
    return result

def leeMatriz(n, m):
    A = crearMatriz(n, m)
    for i in range(n):
        for j in range(m):
            print(f"Introduzca el componente [{i}][{j}]: ", end="")
            A[i][j] = int ( input())

def sumaMatriz(A, B):
    if filas(A) == filas(B) and columnas(A) == columnas(B):
        C = crearMatriz(filas(A), columnas(A))
        for i in range(filas(A)):
            for j in range(columnas(A)):
                C[i][j] = A[i][j] + B[i][j]
        return C

def multiplicaMatrix(A, B):
    if columnas(A) == filas(B):
        C = crearMatriz(filas(A), colmnas(B))
        for i in range(filas(C)):
            for j in range(columnas(C)):
                for k in range(columnas(A)):
                    C[i][j] += A[i][k] * B[k][j]
        return C

def traspuesta(M):
    m = len(M)
    n = len(M[0])
    T = crearMatriz(n, m)
    for i in range(n):
        for j in range(m):
            T[i][j] = M[j][i]

    return T


########
# MAIN #
########
opcion = 1
while opcion >= 1 and opcion <=12:
    menu()
    opcion = int( input("Elija una opcion: "))
    if opcion == 1:
        fil1 = int( input("Introduzca las filas de la matriz A: "))
        col1 = int( input("Introduzca las columnas de la matriz A: "))
        A = leeMatriz(fil1, col1)

        print("\n")

    elif opcion == 2:
        fil2 = int( input("Introduzca las filas de la matrix B: "))
        col2 = int( input("Introduzca las columnas de la matriz B: "))
        B = leeMatriz(fil2, col2)

        print("\n")

    elif opcion == 3:
        matrizSumada = sumaMatriz(A, B)
        
        print("\n")
        