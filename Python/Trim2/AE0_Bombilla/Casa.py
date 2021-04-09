from Bombilla import *

class Casa(object):
    def __init__(self):
        self.__zonasCasa = []
        self.__listaBombillas = []

    def aniadeBombilla(self, zona, bombilla):
        self.__zonasCasa.append(str(zona))
        self.__listaBombillas.append(bombilla)

    def getZonaCasa(self):
        return self.__zonasCasa

    def __str__(self):
        for i in range(len(self.__zonasCasa)):
            print("Zona: "+self.__zonasCasa[i])
            estado1 = self.__listaBombillas[i].getEstadoBombilla()
            if estado1:
                estado2 = "Encendida"
            else:
                estado2 = "Apagada"
            print("Estado: "+estado2+"   Intensidad: "+str(self.__listaBombillas[i].getIntensidad()))