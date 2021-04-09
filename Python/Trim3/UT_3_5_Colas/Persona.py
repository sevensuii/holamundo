class Persona(object):
    def __init__(self, edad, nombre):
        self.__nombre = nombre
        self.__edad = edad
        if edad >= 5 and edad <= 10:
            self.__precio_entrada = 2
        elif edad >= 11 and edad <= 17:
            self.__precio_entrada = 3.5
        elif edad >= 18:
            self.__precio_entrada = 5

    def setNombre(self, nombre):
        self.__nombre = nombre
    def getNombre(self):
        return self.__nombre

    def setEdad(self, edad):
        self.__edad = edad
    def getEdad(self):
        return self.__edad

    def setPrecioEntrada(self, precio_entrada):
        self.__precio_entrada = precio_entrada
    def getPrecioEntrada(self):
        return self.__precio_entrada

    def __str__(self):
        cad ="Nombre: "
        cad += str(self.__nombre)
        cad += "  Edad: "
        cad += str(self.__edad)
        cad += "  "
        return cad
