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