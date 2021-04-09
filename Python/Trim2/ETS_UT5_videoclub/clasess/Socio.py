class Socio(object):
    def __init__(self, dni, nombre, apellido, direccion, telefono, avalador=None):
        self.__dni = dni
        self.__nombre = nombre
        self.__apellido = apellido
        self.__direccion = direccion
        self.__telefono = telefono
        self.__avalador = avalador

    def setDni(self, dni):
        self.__dni = dni
    def getDni(self):
        return self.__dni

    def setNombre(self, name):
        self.__nombre = name
    def getNombre(self):
        return self.__nombre

    def setApellido(self, ape):
        self.__apellido = ape
    def getApellido(self):
        return self.__apellido

    def setDireccion(self, direc):
        self.__direccion = direc
    def getDireccion(self) :
        return self.__direccion

    def setTelefono(self, telefono):
        self.__telefono = telefono
    def getTelefono(self):
        return self.__telefono

    def setAvalador(self, avalador):
        self.__avalador = avalador
    def getAvalador(self):
        return self.__avalador