from lib.Directorio import *

class SistemaFicheros():

    # Un sistema de ficheros es un árbol (conjunto de nodos de tipo archivo y directorio)
    # Le pasamos el nodo raiz al contructor de su padre

    def __init__(self, raiz):
        self.__root = raiz
        # Nodo raiz del árbol (colgarán el resto de los nodos)
        self.__pwd = raiz
        # Nodo que representa el directorio actual del árbol (inicialmente raiz).

    # Devuelve el nodo raiz del árbol
    def getRoot(self):
        return self.__root

    # Devuelve el directorio actual de trabajo.
    def getPwd(self):
        return self.__pwd

    #Devuelve la ruta actual desde la raiz.
    def imprimirRutaActual(self):
        aux = self.__pwd
        cadena =""
        while aux != None:
            if aux.getNombre()!="/":
                # Si no estamos en el raiz.
                cadena=aux.getNombre()+"/"+cadena;
            else:
                # Si estamos en el raiz evitamos duplicar barra
                cadena = aux.getNombre() + cadena;
            aux = aux.getPadre()
        return cadena

    def listarDirectorioRecursivo(self):
        self.__pwd.preorden(self.__pwd, 0)

    def listarContenidoDirectorio(self):
        print(self.__pwd.imprimirContenidoDirectorio())

    def listarArchivo(self, nombre):
        archivobuscado = self.__pwd.buscarNodos(nombre)
        if archivobuscado != None and isinstance(archivobuscado, Archivo):
            # Si se ha encontrado el archivo y no es un directorio
            print(archivobuscado)
        else:
            print("No existe como archivo", archivobuscado)

    def cambiarDirectorio(self, nombredir):
        if nombredir == '..':
            # Si no es el directorio raiz
            if self.__pwd.getPadre() != None:
                # Si es "cd .." volvemos al directorio padre
                # Cambiamos el directorio actual de trabajo
                self.__pwd = self.__pwd.getPadre()
            else:
                print("Está usted en el directorio raiz")
        else:
            # Si es un nombre de directorio
            dirbuscado = self.__pwd.buscarNodos(nombredir)
            if dirbuscado != None and isinstance(dirbuscado, Directorio) :
                self.__pwd = dirbuscado
            else:
                print("No existe como directorio ", nombredir)

    def crearDirectorio(self, nombredir):
        dirbuscado = self.__pwd.buscarNodos(nombredir)
        if dirbuscado == None:
            self.__pwd.nuevaCarpeta(nombredir)
        else:
            print("El directorio ya existe")

    def crearArchivo(self, nombrearchivo):
        archivobuscado = self.__pwd.buscarNodos(nombrearchivo)
        if archivobuscado == None:
            self.__pwd.nuevoArchivo(nombrearchivo)
        else:
            print("El fichero ya existe")

    def borrarArchivo(self, nombrefich):
        archivobuscado = self.__pwd.buscarNodos(nombrefich)
        if archivobuscado == None:
            print("El archivo no existe")
        else:
            self.__pwd.eliminaArchivo(nombrefich)

    def borrarDirectorio(self, nombredir):
        directoriobuscado = self.__pwd.buscarNodos(nombredir)
        if directoriobuscado == None:
            print("La carpeta no existe")
        else:
            self.__pwd.eliminaCarpeta(nombredir)

    def encontrarNodo(self, nombre):
        pass


    def escribirFichero(self, datos):
        pass

    def renombrarFichero(self, nombreold, nombrenew):
        archivobuscado = self.__pwd.buscarNodos(nombreold)
        if archivobuscado == None:
            print("El archivo no existe")
        else:
            self.__pwd.renombraFichero(nombreold, nombrenew)

    def copiarFichero(self, nombrefich, rutacopia):
        pass

    def moverFichero(self, nombrefich, rutanueva):
        pass