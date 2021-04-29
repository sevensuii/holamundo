from lib.SistemaFicheros import *

# Creamos el árbol de directorios
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

print("\n------ Imprimimos todo el árbol desde la raiz -------------")
ext4 = SistemaFicheros(raiz)
ext4.listarDirectorioRecursivo()  # ls -R
ext4.cambiarDirectorio("home")  # cd home
print("\n------ Imprimimos el contenido del directorio home -------------")
ext4.listarDirectorioRecursivo()  # ls -R
print("\n------ Volvemos atrás -------------")
ext4.cambiarDirectorio("..") # cd ..
ext4.listarDirectorioRecursivo()  # ls -R
ext4.cambiarDirectorio("..") # cd ..
ext4.cambiarDirectorio("etc") # cd etc
print("\n------ Mostrar el contenido de un fichero -------------")
ext4.listarArchivo("passwd") # cat passwd
ext4.borrarArchivo("shadow") # rm passwd
print("\n------ Imprimimos el contenido del directorio etc para comprobar borrado -------------")
ext4.listarDirectorioRecursivo()  # ls -R
ext4.cambiarDirectorio("..") # cd ..
ext4.borrarDirectorio("etc") # rmdir
print("\n------ Imprimimos el contenido del directorio / para comprobar borrado de carpeta etc,  subcarpetas y ficheros --------")
ext4.listarDirectorioRecursivo()  # ls -R
print("\n------ Nos encontramos en la siguiente ruta: --------")
ext4.cambiarDirectorio("home")
ext4.cambiarDirectorio("profesor")
print(ext4.imprimirRutaActual()) # pwd
ext4.listarContenidoDirectorio() # pwd