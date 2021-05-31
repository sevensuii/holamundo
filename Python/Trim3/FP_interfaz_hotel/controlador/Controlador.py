import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

import modelo.Modelo as mo

def iniciaSesionC(u, c):
    valor = mo.compruebaUsuario(u, c)
    return valor

def registraUsuarioC(u, d, e, c):
    pass
