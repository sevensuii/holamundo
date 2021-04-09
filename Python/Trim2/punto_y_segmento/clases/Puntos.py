class Puntos(object):
    def __init__(self, corX=0, corY=0):
        self.__x = corX
        self.__y = corY
    
    def getX(self):
        return self.__x
    def getY(self):
        return self.__y
    
    def setX(self, cor):
        self.__x =  cor
    def setY(self, cor):
        self.__y = cor
    
    def __str__(self):
        return "Posicion X: " + str(self.__x) + " y posicion Y: " + str(self.__y)