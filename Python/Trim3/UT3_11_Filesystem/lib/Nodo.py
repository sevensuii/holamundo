from datetime import datetime
class Nodo(object):

    # Nodo del árbol denominado fichero
    # Le pasamos el nombre al contructor.
    # La fecha se tomará en el momento de creación de la actual

    def __init__(self, nombre):
        self.__nombre = nombre
        self.__padre = None
        self.__fechacreacion = datetime.now()

    # El método devuelve el valor del atributo padre
    def getPadre(self):
        return self.__padre

    # Permite establecer quién es el nodo padre
    def setPadre(self, padre):
        self.__padre = padre

    # Devuelve el nombre del fichero
    def getNombre(self):
        return str(self.__nombre)

    def setNombre(self, nombre):
        self.__nombre = nombre

    # Mediante esta sobrecarga devolvemos la información del fichero como cadena de caracteres.
    # De esta forma, permitimos hacer print(nombreobjeto)
    def __str__(self):
        cadena = "\nNombre: "+self.__nombre + "\nFecha de creación: " + str(self.__fechacreacion)
        return cadena