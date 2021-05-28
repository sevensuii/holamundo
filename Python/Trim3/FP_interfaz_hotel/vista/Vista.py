import os,sys,inspect
current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)

from tkinter import *
from functools import partial
from controlador.Controlador import *

inicio=Tk()
inicio.resizable(False, False)
#inicio.geometry('640x320')

def ventana_inicio():

    principal = Frame(inicio, width=640, height=320, bg='white')
    principal.pack()

    frame_imagen1 = Frame(principal, width=300, height=320, bg='white')
    frame_imagen1.pack(side=LEFT)
    frame_formulario = Frame(principal, width=340,  height=320, bg='white')
    frame_formulario.pack(side=RIGHT)

    imagen1 = PhotoImage(file='vista/img/diablillo.png')
    Label(frame_imagen1, image=imagen1, bg='white').grid(column=0, row=0)

    nombre_hotel = Label(frame_formulario, text='Timanfaya', font=('Courgette', 40), bg='white')
    nombre_hotel.grid(column=0, row=0, columnspan=2, padx=5)
    algo_hotel = Label(frame_formulario, text='Hoteles', font=('Courgette', 15), bg='white')
    algo_hotel.grid(column=1, row=1, columnspan=2, sticky='e', padx=5)

    #espacio1 = Label(frame_formulario, text=' ', bg='white') #espacio entre cabecera hoteles e inicia sesion
    #espacio1.grid(column=0, row=2, pady=5)

    usuario0 = StringVar()
    usuario1 = Label(frame_formulario, text='Usuario', font = ('Source Serif Pro', 15), bg='white')
    usuario1.grid(column=0, row=3, sticky='w', columnspan=2, padx=30)
    usuario2 = Entry(frame_formulario, textvariable = usuario0, font = ('Source Serif Pro', 15))
    usuario2.grid(column=0, row=4, sticky='w', padx=30, columnspan=2)

    espacio2 = Label(frame_formulario, text=' ', bg='white')
    espacio2.grid(column=0, row=5, pady=5)

    contrasena0 = StringVar()
    contrasena1 = Label(frame_formulario, text='Contraseña', font = ('Source Serif Pro', 15), bg='white')
    contrasena1.grid(column=0, row= 6, sticky='w', columnspan=2, padx=30)
    contrasena2 = Entry(frame_formulario, textvariable = contrasena0, font = ('Source Serif Pro', 15))
    contrasena2.config(show='*')
    contrasena2.grid(column=0, row=7, sticky='w', columnspan=2, padx=30)

    espacio3 = Label(frame_formulario, text=' ', bg='white') #espacio entre el cuadro contraseña y los botones
    espacio3.grid(column=0, row=8, pady=7)

    boton_inicio = Button(frame_formulario, text='Iniciar sesión', command = partial(iniciaSesion, usuario0, contrasena0), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    boton_inicio.grid(column=0, row=9, sticky='e', padx=3)
    boton_registro = Button(frame_formulario, text='Regístrate', command = partial(registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    boton_registro.grid(column=1, row=9, sticky='w', padx=3)

    espacio4 = Label(frame_formulario, text=' ', bg='white') #espacio entre el cuadro contraseña y los botones
    espacio4.grid(column=0, row=11, pady=5)
    #boton_registro

    #espacio2 = Label(frame_formulario, text=' ', bg='white')
    #espacio2.grid(column=0, row=2, pady=70)

    #label1.place(x=500, y=300)


    inicio.mainloop()

def registro():
    print('hola')

def iniciaSesion(u, c):
    print(u.get())
    print(c.get())


ventana_inicio()