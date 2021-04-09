from Persona import Persona

class Director(Persona):
    def __init__(self, nombre_artistico, nacionalidad, sexo, genero_cinematografico):
        super(Director, self).__init__(nombre_artistico, nacionalidad, sexo)
        self.__genero_cinematografico = genero_cinematografico
        self.__lista_peliculas = []

    def setGenero(self, val):
        self.__genero_cinematografico = val
    def getGenero(self):
        return self.__genero_cinematografico

    def getPelicula(self, pos):
        return self.__lista_peliculas[pos]
    def aniadePeliculas(self, peli):
        self.__lista_peliculas.append(peli)
    def eliminaPeliculas(self, pos):
        self.__lista_peliculas.remove(pos)