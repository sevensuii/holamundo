from Persona import Persona

class  Actor(Persona):
    def __init__(self, nombre_artistico, nacionalidad, sexo):
        super(Actor, self).__init__(nombre_artistico, nacionalidad, sexo)
        self.__lista_peliculas = [] #lista de todas las peliculas que hace
        self.__lista_personaje = [] #lista en la que dependiendo de la pelicura que se accdeda, figurara si en esa
                                    # pelicula hace de personaje primario o secundario

    def getPeliculas(self, pos):
        return self.__lista_peliculas[pos]
    def aniadePeliculas(self, peli):
        self.__lista_peliculas.append(peli)
    def eliminaPeliculas(self, pos):
        self.__lista_peliculas.remove(pos)

    def getPersonaje(self, pos):
        return self.__lista_personaje[pos]
    def aniadePersonaje(self, val):
        self.__lista_personaje.append(val)
    def eliminaPersonaje(self, pos):
        self.__lista_personaje.remove(pos)