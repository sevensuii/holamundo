class Bombilla(object):
    fusible_general = True # FALSE el fusible esta bajado || TRUE el fusible esta subido

    def __init__(self, bombillaEncendida=False, intensidadBombilla=128):
        self.__bombillaEncendida = False
        self.__intensidadBombilla = intensidadBombilla

    def getIntensidad(self): # Devuelve intensidad de una bombilla
        return self.__intensidadBombilla
    def setIntensidad(self, valor): # Establece intensidad de una bombilla
        self.__intensidadBombilla = valor

    def enciendeBombilla(self): # Enciende una bombilla
        self.__bombillaEncendida = True
    def apagaBombilla(self): # Apaga una bombilla
        self.__bombillaEncendida = False

    def getEstadoBombilla(self): # Devuelve el estado de la bombilla en funcion de la 
        if Bombilla.fusible_general and self.__bombillaEncendida:   # palanca general
            return True                                             # y la bombilla
        else:
            return False