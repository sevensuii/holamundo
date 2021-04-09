from datetime import datetime

class cuentaCorriente(object):
    def __init__(self, nombre, DNI, saldo=0, limite=-50, banco=None, ultimo_mov=None):
        self.nombre = nombre
        self.__DNi = DNI
        self.__saldo = saldo
        self.__limite = limite
        self.banco = banco
        self.ultimo_mov = ultimo_mov

    def setBanco(self, nombre_banco):
        self.banco = nombre_banco

    def setNombre(self, name):
        self.nombre = name

    def setLimite(self, limit):
        self.__limite = limit
    
    def ingresaDinero(self, cant):
        self.__saldo += cant
        self.ultimo_mov = datetime.now()

    def retiraDinero(self, cant):
        if self.__saldo - cant >= self.__limite:
            self.__saldo -= cant
            self.ultimo_mov = datetime.now()
        else:
            print("No dispone de los fondos para realizar la operacion.")

    def __str__(self):
        cadena = ""
        cadena += "Nombre del propietario: " + str(self.nombre) + "\n"
        cadena += "DNI: " + str(self.__DNi) + "\n"
        cadena += "Saldo de su cuenta: " + str(self.__saldo) + "\n"
        cadena += "Limite: " + str(self.__limite) + "\n"
        cadena += "Pertenece al banco: " + str(self.banco) + "\n"
        cadena += "Su ultimo moviento ha sido: " + str(self.ultimo_mov) + "\n"
        return cadena