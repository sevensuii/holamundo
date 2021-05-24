#import os, sys
#currentdir = os.path.dirname(os.path.realpath(__file__))
#parentdir = os.path.dirname(currentdir)
#sys.path.append(parentdir)

import os,sys,inspect
current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)

from tkinter import *
from controlador.Controlador import *

inicio = Tk()

inicio.title("Inicio de sesion")
inicio.resizable(False, False)
inicio.geometry('1280x720')

inicio.mainloop()
