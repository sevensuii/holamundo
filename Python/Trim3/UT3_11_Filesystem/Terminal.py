from lib.SistemaFicheros import *

def selector(i, fs):
    orden = i.split(' ')
    # En función de la orden de la izquierda, ejecutamos con el parámetro de la derecha.

    # Órdenes de un parámetro
    if len(orden) == 1:
        if orden[0] == 'exit': print("Hasta la próxima")
        if orden[0] == 'ls': fs.listarContenidoDirectorio()
        #if orden[0] == 'history': fs.listarComandosEjecutados() #Histórico de comandos utilizados.

    # Órdenes de dos parámetros
    if len(orden) == 2:
        if orden[0] == 'ls' and orden[1] == '-R': fs.listarDirectorioRecursivo()
        if orden[0] == 'cd': fs.cambiarDirectorio(orden[1])
        if orden[0] == 'cat': fs.listarArchivo(orden[1])
        if orden[0] == 'mkdir': fs.crearDirectorio(orden[1])
        if orden[0] == 'touch': fs.crearArchivo(orden[1])
        if orden[0] == 'rm': fs.borrarArchivo(orden[1])
        if orden[0] == 'rmdir': fs.borrarDirectorio(orden[1])
        #if orden[0] == 'find': fs.encontrarNodo(orden[1]) # Búsqueda de un archivo desde el raiz.

    if len(orden) == 3:
        if orden[0] == 'rn': fs.renombrarFichero(orden[1], orden[2])  # Renombra un archivo
        #if orden[0] == 'cp': fs.copiarFichero(orden[1], orden[2])  # Copia un archivo en otra ubicación
        #if orden[0] == 'mv': fs.moverFichero(orden[1], orden[2])  # Mueve un archivo en otra ubicación

    # Subir nota: Añadir nuevas funcionalidades aparte de las que se piden

def cargarEstructuraLinux():
    raiz = Directorio("/")
    b = raiz.nuevaCarpeta("bin") # mkdir bin
    h = raiz.nuevaCarpeta("home") # mkdir home
    d = raiz.nuevaCarpeta("dev") # mkdir dev
    e = raiz.nuevaCarpeta("etc") # mkdir etc
    profesor = h.nuevaCarpeta("profesor")
    alumno = h.nuevaCarpeta("alumno")
    password = e.nuevoArchivo("passwd") # touch passwd
    password.setContenido("\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nbin:x:2:2:bin:/bin:/usr/sbin/nologin\nsys:x:3:3:sys:/dev:/usr/sbin/nologin")
    shadow = e.nuevoArchivo("shadow") # touch shadow
    nodo7 = profesor.nuevoArchivo("prueba.txt")
    nodo8 = profesor.nuevoArchivo("index.html")
    return raiz


# Fin de las funciones.
# Comienzo del programa principal.

raiz = cargarEstructuraLinux()
ext4 = SistemaFicheros(raiz)

opcion = ''
historial = ""

while opcion != 'exit':
    opcion = input(ext4.imprimirRutaActual()+"> ")
    historial += opcion + "\n"

    # Selecciona los métodos en función de la orden
    selector(opcion, ext4)
