from lib.Archivo import *

class Directorio(Nodo):

    # Un fichero puede ser un archivo o un directorio
    # Nodo del árbol denominado archivo que hereda de fichero
    # Le pasamos el nombre al contructor de su padre
    # Los directorios contienen una lista de archivos (Ficheros y Directorios)

    def __init__(self, nombre):
        super(Directorio, self).__init__(nombre)
        # Llamamos al contructor del padre
        self.Nodos = []
        # Lista de archivos y directorios en su interior

    # Mediante esta sobrecarga devolvemos la información del fichero como cadena de caracteres.
    # De esta forma, permitimos hacer print(nombreobjeto)
    # Imprimimos los atributos comunes heredados de nuestro padre y le concatenamos los propios.
    def __str__(self):
        return super(Directorio, self).__str__() + "\nLista Hijos: " + self.imprimirContenidoDirectorio()

    def imprimirContenidoDirectorio(self):
        cadena = "{"
        if len(self.Nodos) != 0:
            for fichero in self.Nodos:
                cadena += str(fichero.getNombre())+","
        cadena += "}"
        return cadena

    def buscarNodos(self, nombre):
        if len(self.Nodos) != 0:
            for fichero in self.Nodos:
                if fichero.getNombre() == nombre:
                    return fichero
        return None

    def nuevaCarpeta(self, nombre):
        nuevoDir = self.buscarNodos(nombre)
        if nuevoDir != None:
            print("La carpeta ya existe")
        else:
            nuevoDir = Directorio(nombre)
            nuevoDir.setPadre(self)
            self.Nodos.append(nuevoDir)
        return nuevoDir

    def nuevoArchivo(self, nombre):
        nuevoFich = self.buscarNodos(nombre)
        if nuevoFich != None:
            print("El fichero ya existe")
        else:
            nuevoFich = Archivo(nombre)
            nuevoFich.setPadre(self)
            self.Nodos.append(nuevoFich)
        return nuevoFich

    def preorden(self, nodo, j):
        if nodo == None:
            return ""
        print(("\t"*j) + nodo.getNombre())
        if isinstance(nodo, Directorio):
            for i in range(len(nodo.Nodos)):
                self.preorden(nodo.Nodos[i], j+1)

    def eliminaArchivo(self, nombre):
        if len(self.Nodos) != 0:
            for fichero in self.Nodos:
                if fichero.getNombre() == nombre:
                    self.Nodos.remove(fichero)
        return None

    def eliminaCarpeta(self, nombre):
        if len(self.Nodos) != 0:
            for carpeta in self.Nodos:
                if carpeta.getNombre() == nombre:
                    self.Nodos.remove(carpeta)
        return None

    def renombraFichero(self, viejo, nuevo):
        if len(self.Nodos) != 0:
            for archivo in self.Nodos:
                if archivo.getNombre() == viejo:
                    archivo.setNombre(nuevo)
        return None