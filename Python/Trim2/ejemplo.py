from datetime import date

class Persona(object):
    def __init__(self, d="nodni", n="noname", a="noape", s="MF", f=date(1990,1,1)):
        self.__dni = d
        self.__nombre = n
        self.__apellido = a
        self.__sexo = "MF"
        if s == "M" or s == "F":
            self.__sexo = s
        self.__fecha_nac = f

    def getsexo(self):
        return self.__sexo

    def setsexo(self, sexo):
        if sexo == "M" or sexo == "F":
            self.__sexo = sexo

    def getdni(self):
        return self.__dni

    def setdni(self, dni):
        self.__dni = dni

    def setnombre(self, nombre):
        self.__nombre = nombre

    def getnombre(self):
        return self.__nombre

    def getapellido(self):
        return self.__apellido

    def setapellido(self, apellido):
        self.__apellido = apellido

    def calcularEdad1(self):
        fechaactual = date.today()
        diferencia = fechaactual - self.__fecha_nac
        edad = (diferencia.days) / 365.25
        return int(edad)

    def calcularEdad2(self):
        hoy = date.today()
        edad = hoy.year - self.__fecha_nac.year
        if self.__fecha_nac.month >= hoy.month and self.__fecha_nac.day > hoy.day:
        # Si no se ha llegado al mes de nacimiento, o si se ha llegado y no se ha llegado al día
            edad -= 1
        return edad

    def __str__(self):
        cadena = "\nDNI: "+self.__dni +\
                 "\nNombre: "+ self.__nombre +\
                 "\nApellido: "+ self.__apellido +\
                 "\nSexo: "+ self.__sexo+" "+\
                 "\nFecha nacimiento: " + str(self.__fecha_nac) +\
                 "\nEdad: " + str(self.calcularEdad2()) + " "
        return cadena


# Programa principal
listapersonas = []

persona1 = Persona("12345678X", "Elena", "Fuentes", "F", date(1994, 10, 14))
persona2 = Persona("11111111X", "Francisco", "Atoche", "M", date(1985, 12, 20))
listapersonas.append(persona1)
listapersonas.append(persona2)
listapersonas.append(Persona(d="987654321A", n="Andrés", a="Alonso", s="M"))

for persona in listapersonas:
    print(persona)
