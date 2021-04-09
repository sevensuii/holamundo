from datetime import datetime

class Pelicula(object):
    def __init__(self, titulo, nacionalidad, productora, fecha, director, num_copias):
        self.__titulo = titulo
        self.__nacionalidad = nacionalidad
        self.__productora = productora
        self.__fecha = fecha
        self.__lista_actores = []
        self.__director = director
        self.__num_copias = num_copias

    def setTitulo(self, titulo):
        self.__titulo = titulo
    def getTitulo(self):
        return self.__titulo
    
    def setNacionalidad(self, nacionalidad):
        self.__nacionalidad = nacionalidad
    def getNaacionalidad(self):
        return self.__nacionalidad

    def setProductora(self, producer):
        self.__productora = producer
    def getProductora(self):
        return self.__productora
    
    def setFecha(self, fecha):
        self.__fecha = fecha
    def getFecha(self):
        return self.__fecha

    def getActores(self, pos):
        return self.__lista_actores[pos]
    def anideActores(self, actor):
        self.__lista_actores.append(actor)
    def eliminaActores(self, actor):
        self.__lista_actores.remove(actor)

    def setDirector(self, direc):
        self.__director = direc
    def getDirector(self):
        return self.__director

    def setCopias(self, num):
        self.__num_copias = num
    def getCopias(self):
        return self.__num_copias