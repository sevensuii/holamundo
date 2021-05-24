import os,sys,inspect
current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)

from tkinter import *
from controlador.Controlador import *

inicio=Tk()

def inicio_sesion():
    frame_inicio = Frame(inicio, width=640, height=400)
    frame_inicio.pack()
    label1 = Label(frame_inicio, text='Inicio de sesion')
    label1.place(x=500, y=300)

    imagen1 = PhotoImage(file='vista/img/timanfaya.png')
    Label(frame_inicio, image=imagen1).place(x=0, y=0)

    inicio.mainloop()


inicio_sesion()