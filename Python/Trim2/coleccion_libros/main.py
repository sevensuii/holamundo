from clases.Libro import *

def mostrarMenu():
    print("#################################################")
    print("#     0) Salir                                  #")
    print("#     1) Añadir libros                          #")
    print("#     2) Borrar libro                           #")
    print("#     3) Mostrar libros por calificacion        #")
    print("#################################################")
    print("# Introduzca opcion: ")


######
#MAIN#
######
listaLibros = []
opcion = 1
while opcion != 0:
    mostrarMenu()
    opcion = int(input())
    if opcion < 0 or opcion > 3:
        pass
    elif opcion == 0:
        print("Ha terminado el programa!")
        break
    elif opcion == 1:
        print("Introduce los siguientes datos: ")
        name = input("Nombre: ")
        author = input("Autor: ")
        year = input("Paginas: ")
        cal = input("Calificacion: ")

        libro1 = coleccionLibro(name, author, year, cal)
        listaLibros.append(libro1)
        print("Libro añadido", end="\n\n\n")
    elif opcion == 2:
        nom = input("Introduzca el nombre del libro a eliminar: ")
        aut = input("Introduzca el nombre del autor del libro: ")
        for i in range(len(listaLibros)):
            if nom == listaLibros[i].getTitulo() and aut == listaLibros[i].getAutor():
                listaLibros.remove(i)
    elif opcion == 3:
        for i in range(len(listaLibros)):
            print(listaLibros[i])

for i in range(len(listaLibros)):
    print(listaLibros[i])