class Racional(object):
    def __init__(self, numerador=1, denominador=1):
        if numerador < 0:
            if denominador < 0:
                self.__numerador = abs(numerador)
                self.__denominador = abs(denominador)
            elif denominador > 0:
                self.__numerador = numerador
                self.__denominador = denominador
        elif numerador > 0:
            if denominador < 0:
                self.__numerador = numerador * -1
                self.__denominador = abs(denominador)
            elif denominador > 0:
                self.__numerador = numerador
                self.__denominador = denominador

        #self.__numerador = numerador
        #self.__denominador = denominador
        



    ###################################### SET y GET de atributos
    def getNumerador(self):
        return self.__numerador
    def setNumerador(self, num):
        self.__numerador = num

    def getDenominador(self):
        return self.__denominador
    def setDenominador(self, num):
        self.__denominador = num

    ###################################### Operaciones para las fracciones
    def sumaFraccion(self, fraccion):
        arriba1 = self.__numerador * abs(fraccion.getDenominador())
        arriba2 = fraccion.getNumerador() * abs(self.__denominador)

        return mcd(arriba1 + arriba2, abs(self.__denominador) * abs(fraccion.getDenominador()))

    def restaFraccion(self, fraccion):
        arriba1 = self.__numerador * abs(fraccion.getDenominador())
        arriba2 = fraccion.getNumerador() * abs(self.__denominador)

        return mcd(arriba1 - arriba2, abs(self.__denominador) * abs(fraccion.getDenominador()))

    def multiplicaFracciones(self, fraccion):
        arriba1 = self.__numerador * fraccion.getNumerador()
        abajo1 = self.__denominador * fraccion.getDenominador()

        return mcd(arriba1, abajo1)

    def divideFracciones(self, fraccion):
        arriba1 = self.__numerador * fraccion.getDenominador()
        abajo1 = self.__denominador * fraccion.getNumerador()

        return mcd(arriba1, abajo1)

    ###################################### Sobreescritura de los metodos [str, =, <, >, <=, >=, == ,!=]
    # https://medium.com/@LuisMBaezCo/overloading-sobrecargar-operadores-en-python-5d7a75e2bfdf#:~:text=La%20sobrecarga%20de%20operadores%20(Overloading,hacer%20comparaciones%20y%20operaciones%20entre
    ### METODO STR
    def __str__(self):
        cadena = ""
        cadena += str(self.__numerador)
        cadena += "/"
        cadena += str(self.__denominador)

        return cadena
    
    ### METODO = 
    def __

    ###################################### Maximo Comun Divisor para simplificar fracciones
def mcd(numerador, denominador): 
    mcd = abs(numerador)
    temp = denominador
    while temp > 0:
        resto = mcd % temp
        mcd = temp
        temp = resto
    numerador /= mcd
    denominador /= mcd

    return int(numerador), int(denominador)
