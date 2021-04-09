from datetime import datetime
from Pelicula import Pelicula


class Alquiler(object):
    def __init__(self, fecha_entrega, fecha_devolucion, precio, pelicula, socio):
        self.__fecha_entrega = fecha_entrega
        self.__fecha_devolucion = fecha_devolucion
        self.__precio = precio
        self.__pelicula = pelicula
        self.__socio = socio

    def setFechaEntrega(self, fecha):
        self.__fecha_entrega = fecha
    def getFechaEntrega(self):
        return self.__fecha_entrega

    def setFechaDevolucion(self, fecha):
        self.__fecha_devolucion = fecha
    def getFechaDevolucion(self):
        return self.__fecha_devolucion

    def setPrecio(self, val):
        self.__precio = val
    def getPrecio(self):
        return self.__precio