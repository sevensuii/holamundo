import os,sys,inspect
current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)

from tkinter import *
from functools import partial
import controlador.Controlador as co
import tkinter.ttk as ttk
import time

inicio=Tk()
inicio.resizable(False, False)
#inicio.geometry('640x320')

#############################################
# CARGA DE IMAGENES COMO VARIABLES GLOBALES #
#############################################

img_diablillo  = PhotoImage(file='vista/img/diablillo.png')
img_usuario = PhotoImage(file='vista/img/usuario4.png')
#img_cargando = [PhotoImage(file='vista/img/loading.gif', format='gif -index %i' %(i)) for i in range(9)]
img_admin = PhotoImage(file='vista/img/admin.png')

#######
# FIN #
#######

############
# VENTANAS #
############

def ventana_inicio():

    principal = Frame(inicio, width=640, height=320, bg='white')
    principal.pack()

    frame_imagen1 = Frame(principal, width=300, height=320, bg='white')
    frame_imagen1.pack(side=LEFT)
    frame_formulario = Frame(principal, width=340,  height=320, bg='white')
    frame_formulario.pack(side=RIGHT)

    Label(frame_imagen1, image=img_diablillo, bg='white').grid(column=0, row=0)

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

    boton_inicio = Button(frame_formulario, text='Iniciar sesión', command = partial(iniciaSesionV, usuario0, contrasena0, principal), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    boton_inicio.grid(column=0, row=9, sticky='e', padx=3)
    boton_registro = Button(frame_formulario, text='Regístrate', command = partial(ventana_registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    boton_registro.grid(column=1, row=9, sticky='w', padx=3)

    espacio4 = Label(frame_formulario, text=' ', bg='white') #espacio entre el cuadro contraseña y los botones
    espacio4.grid(column=0, row=11, pady=5)
    #boton_registro

    #espacio2 = Label(frame_formulario, text=' ', bg='white')
    #espacio2.grid(column=0, row=2, pady=70)

    #label1.place(x=500, y=300)


    inicio.mainloop()

def ventana_registro():
    registro = Toplevel()
    registro.resizable(False, False)
    frame_cabecera = Frame(registro, width=500, bg='#2083E1')
    frame_cabecera.pack(fill='x', expand=True)
    texto1 = Label(frame_cabecera, text='Creación de un nuevo usuario', font= ('Noto Serif', 20), bg='#2083E1')
    texto1.grid(column=0, row=0)
    resto = Frame(registro, width=500, bg='white')
    resto.pack()
    zona1 = Frame(resto, width=50)
    zona1.pack(side=LEFT, padx=10)
    zona2 = Frame(resto, width=200, bg='white')
    zona2.pack(side=RIGHT, padx=10)
    #imagen1 = PhotoImage(file='vista/img/diablillo.png')
    Label(zona1, image=img_usuario, bg='white').grid(column=0, row=0)
    espacio1 = Label(zona2, text=' ', bg='white')
    espacio1.grid(column=0, row=0, pady=5)

    nombre_us0 = StringVar()
    nombre_us1 = Label(zona2, text='Nombre de usuario', font = ('Source Serif Pro', 15), bg='white')
    nombre_us1.grid(column=0, row=1, sticky='w', padx=6)
    nombre_us2 = Entry(zona2, textvariable=nombre_us0, font = ('Source Serif Pro', 15))
    nombre_us2.grid(column=0, row=2, sticky='w', padx=6)

    dni0 = StringVar()
    dni1= Label(zona2, text='DNI', font = ('Source Serif Pro', 15), bg='white')
    dni1.grid(column=1, row=1, sticky='w', padx=6)
    dni2 = Entry(zona2, textvariable=dni0, font = ('Source Serif Pro', 15))
    dni2.grid(column=1, row=2, sticky='w', padx=6)

    espacio2 = Label(zona2, text=' ', bg='white')
    espacio2.grid(column=0, row=3, pady=1)

    email0 = StringVar()
    email1 = Label(zona2, text='E-mail', font = ('Source Serif Pro', 15), bg='white')
    email1.grid(column=0, row=4, sticky='w', padx=6)
    email2 = Entry(zona2, textvariable=email0, font = ('Source Serif Pro', 15), width=42)
    email2.grid(column=0, row=5, sticky='w', columnspan=2, padx=6)

    espacio3 = Label(zona2, text=' ', bg='white')
    espacio3.grid(column=0, row=6, pady=1)

    contrasena0 = StringVar()
    contrasena1 = Label(zona2, text='Contraseña', font = ('Source Serif Pro', 15), bg='white')
    contrasena1.grid(column=0, row=7, sticky='w', padx=6)
    contrasena2 = Entry(zona2, textvariable=contrasena0, font = ('Source Serif Pro', 15), show='*')
    contrasena2.grid(column=0, row=8, sticky='w', padx=6)

    contrasena3 = StringVar()
    contrasena4 = Label(zona2, text='Repita contraseña', font = ('Source Serif Pro', 15), bg='white')
    contrasena4.grid(column=1, row=7, sticky='w', padx=6)
    contrasena5 = Entry(zona2, textvariable=contrasena3, font = ('Source Serif Pro', 15), show='*')
    contrasena5.grid(column=1, row=8, sticky='w', padx=6)


    espacio4 = Label(zona2, text=' ', bg='white')
    espacio4.grid(column=0, row=9, pady=1)

    bot_registro = Button(zona2, text='Registrarme', command = partial(registrarse, nombre_us0, dni0, email0, contrasena0, contrasena3, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_registro.grid(column=0, row=10, sticky='e', padx=5)
    bot_cancela = Button(zona2, text='Cancelar', command = partial(cancelar, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_cancela.grid(column=1, row=10, sticky='w',padx=5)

    espacio5 = Label(zona2, text=' ', bg='white')
    espacio5.grid(column=0, row=11, pady=1)
    


################
# FIN VENTANAS #
################

########################################
# FUNCIONES PARA LLAMAR AL CONTROLADOR #
########################################

def cancelar(pant):
    pant.destroy()

def registrarse(u, d, e, c1, c2, pant):
    pass

def iniciaSesionV(u, c, pant):
    #print(u.get())
    #print(c.get())
    #pant.destroy()
    #comprobacion = co.iniciaSesionC(u, c)
    comprobacion = True
    if comprobacion:
        # Inicio de sesion correcto
        vent = Toplevel()
        miframe = Frame(vent, width=200, height=400)
        miframe.pack()
        #imagen3 = PhotoImage(file='vista/img/loading.gif')
        barra_carga = ttk.Progressbar(miframe, orient='horizontal', mode='determinate', maximum=100, value=0, length=400)
        barra_carga.grid(column=0, row=0)
        miframe.update()

        barra_carga['value'] = 0
        miframe.update()
        while barra_carga['value'] < 100:
            barra_carga['value'] += 1
            miframe.update()
            time.sleep(0.01)
        
        vent.destroy()
        #pant.destroy()


#################
# FIN FUNCIONES #
#################

ventana_inicio()

#r4r int