import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

import modelo.Modelo as mo

def iniciaSesionC(u, c):
    valor = mo.compruebaUsuario(u, c)
    return valor

def registraUsuarioC(u, d, e, c):
    usr1 = str(u)
    dni1 = str(d).upper()
    email1 = str(e)
    contra1 = str(c)
    usr2 = str(mo.consultaUsuario(u)).lower()
    dni2 = str(mo.consultaDNI(d)).lower()
    msg_info = ''
    if usr1.lower() == usr2.lower():
        msg_info = 'El usuario ya existe, pruebe con otro.'
        return 1, msg_info
    elif dni1.upper() == dni2.upper():
        msg_info = 'El dni que ha introducido ya se encuentra registrado.'
        return 2, msg_info
    else:
        mo.creaUsuario(usr1, dni1, email1, contra1)
        msg_info = 'El usuario se ha creado correctamente!'
        return 2, msg_info

registraUsuarioC('Saraa', '23456789P', 'dasdad', '123')