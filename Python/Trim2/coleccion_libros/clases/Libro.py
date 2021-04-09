class coleccionLibro(object):
    def __init__(self, titulo, autor, num_pag, calificacion=0):
        self.titulo = titulo
        self.autor = autor
        self.num_pag = num_pag
        if int(calificacion) <= 0:
            self.calificacion = 0
        elif int(calificacion) >= 10:
            self.calificacion = 10
        else:
            self.calificacion = calificacion

    def setTitulo(self, titulo):
        self.titulo = titulo
    def getTitulo(self):
        return self.titulo

    def setAutor(self, autor):
        self.autor = autor
    def getAutor(self):
        return self.autor

    def setNumPag(self, num):
        self.num_pag = num
    def getNumPag(self):
        return self.num_pag

    def setCalificacion(self, calificacion):
        if calificacion <= 0:
            self.calificacion = 0
        elif calificacion >= 10:
            self.calificacion = 10
        else:
            self.calificacion = calificacion  
    def getCalificacion(self):
        return self.calificacion

    def __str__(self):
        cadena = ""
        cadena += "Titulo: " + str(self.titulo) + "\n"
        cadena += "Paginas: " + str(self.num_pag) + "\n"
        cadena += "Autor: " + str(self.autor) + "\n"
        cadena += "Calificacion: " + str(self.calificacion) + "\n\n"

        return cadena