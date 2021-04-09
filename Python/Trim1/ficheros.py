fd = open("datos/clientes.txt", "r", encoding="utf-8")

for linea in fd:
    linea_limpia = linea[0:len(linea)-1]
    cliente = linea_limpia.split(",")
    dni = cliente[0].strip(' ')
    nombre = cliente[1].strip(' ')
    apellidos = cliente[2].strip(' ')
    telefono = cliente[3].strip(' ')
    print(str(dni)+" "+str(nombre)+" "+str(apellidos)+" "+str(telefono))