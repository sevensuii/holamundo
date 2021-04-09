from Puntos import *

class Segmento(Puntos):
    def __init__(self, p1=Puntos(0,0), p2=Puntos(0,0)):
        #Punto inicial de la recta
        self.__p1 = p1
        #Punto final de la recta
        self.__p2 = p2
    
    def __str__(self):
        return "[ " +str(self.__p1)+str(self.__p2)+" ]"