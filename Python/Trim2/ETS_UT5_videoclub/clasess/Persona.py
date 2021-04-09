from abc import ABC

class Persona(ABC):
    def __init__(self, nombre_artistico, nacionalidad, sexo):
        self.__nombre_artistico = nombre_artistico
        self.__nacionalidad = nacionalidad
        self.__sexo = sexo

    def setNombre(self, name):
        self.__nombre_artistico = name
    def getNombre(self):
        return self.__nombre_artistico

    def setNacionalidad(self, nacionalidad):
        self.__nacionalidad = nacionalidad
    def getNaacionalidad(self):
        return self.__nacionalidad
    
    def setSexo(self, sexo):
        self.__sexo = sexo
    def getSexo(self):
        return self.__sexo