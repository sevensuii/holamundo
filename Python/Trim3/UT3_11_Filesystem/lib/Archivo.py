from lib.Nodo import *

class Archivo(Nodo):

    # Un nodo del árbol puede ser un archivo o un directorio
    # Nodo del árbol denominado archivo que hereda de nodo
    # Le pasamos el nombre al contructor de su padre
    # Los archivos tienen datos, los directorios contienen otros archivos o directorios

    def __init__(self, nombre):
        super(Archivo, self).__init__(nombre)
        # Inicialmente el archivo estará vacio.
        self.__contenido = None

    # Establecemos el contenido del fichero.
    def setContenido(self, cadena):
        self.__contenido = cadena

    # Mediante esta sobrecarga devolvemos la información del fichero como cadena de caracteres.
    # De esta forma, permitimos hacer print(nombreobjeto)
    # Imprimimos los atributos comunes heredados de nuestro padre y le concatenamos los propios.
    def __str__(self):
        return super(Archivo, self).__str__() + "\nContenido: " + str(self.__contenido)