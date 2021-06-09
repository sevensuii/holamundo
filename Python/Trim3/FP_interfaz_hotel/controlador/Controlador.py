import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

import modelo.Modelo as mo

def iniciaSesionC(u, c):
    valor1 = mo.compruebaUsuario(u, c)
    valor2 = mo.devuelveDNIusuario(u)
    return valor1, valor2

def registraUsuarioC(u, d, e, c):
    usr1 = str(u)
    dni1 = str(d).upper()
    email1 = str(e)
    contra1 = str(c)
    usr2 = str(mo.consultaUsuario(u)).lower()
    dni2 = str(mo.consultaDNI(d)).lower()
    #msg_info = ''
    if usr1.lower() == usr2.lower():
        #El usuario ya existe, pruebe con otro.
        return 3
    elif dni1.upper() == dni2.upper():
        #El dni que ha introducido ya se encuentra registrado.
        return 2
    else:
        mo.creaUsuario(usr1, dni1, email1, contra1)
        #El usuario se ha creado correctamente!
        return 1

def recibeDatosC(opcion):
    if opcion == 1:
        resultado = mo.recibeClientes()
        return resultado
    elif opcion == 2:
        resultado = mo.recibeHabitaciones()
        return resultado

def aniadeHabitacionC(m2, piso, cat):
    metros = int(m2.get())
    pi = int(piso.get())
    categ = str(cat.get())
    print(metros)
    print(pi)
    print(categ)

    mo.aniadeHabitacionM(metros, pi, categ)

def eliminaDatosC(ind, id):
    valor = id[0]
    if ind == 0:
        mo.eliminaCliente(valor)
    elif ind == 1:
        mo.eliminaHabitacion(valor)

def creaClienteC(nombre, apellidos, dni, tlf, email, fecha, pais, dire):
    nombre1 = str(nombre.get())
    apellidos1 = str(apellidos.get())
    dni1 = str(dni.get())
    tlf1 = str(tlf.get())
    email1 = str(email.get())
    fecha1 = str(fecha.get())
    pais1 = str(pais.get())
    dire1 = str(dire.get())
    mo.creaClienteM(nombre1, apellidos1, dni1, tlf1, email1, fecha1, pais1, dire1)

def devuelveDatos(ind, id):
    if ind == 0:
        datos = mo.devuelveDatosClienteM(int(id[0]))
    elif ind == 1:
        datos = mo.devuelveDatosHab(int(id[0]))

    return datos

def editaDatosHabC(m2, cat, piso, ide):
        m21 = m2.get()
        cat1 = cat.get()
        piso1 = piso.get()
        mo.actualizaHab(int(ide),m21, cat1, piso1)