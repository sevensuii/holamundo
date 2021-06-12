import os,sys,inspect
current_dir = os.path.dirname(os.path.abspath(inspect.getfile(inspect.currentframe())))
parent_dir = os.path.dirname(current_dir)
sys.path.insert(0, parent_dir)

from tkinter import *
from tkinter import messagebox
from functools import partial
import controlador.Controlador as co
import tkinter.ttk as ttk
import time

inicio=Tk()
inicio.resizable(False, False)
inicio.geometry('560x350')

#############################################
# CARGA DE IMAGENES COMO VARIABLES GLOBALES #
#############################################

img_diablillo  = PhotoImage(file='vista/img/diablillo.png')
img_usuario = PhotoImage(file='vista/img/usuario4.png')
#img_cargando = [PhotoImage(file='vista/img/loading.gif', format='gif -index %i' %(i)) for i in range(9)]
img_admin = PhotoImage(file='vista/img/admin3.png')
img_hab = PhotoImage(file='vista/img/hab2.png')

#######
# FIN #
#######

######################
# VARIABLES GLOBALES #
######################

#nombre_usuario_dentro = ''
#dni_usuario_dentro = ''

##########################
# FIN VARIABLES GLOBALES #
##########################

############
# VENTANAS #
############

def ventana_inicio():
    '''Genera la ventana para iniciar sesión.
    
    '''
    inicio.geometry('560x350')

    principal = Frame(inicio, width=640, height=320, bg='white')
    principal.pack(expand=YES, fill=BOTH)

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
    '''Genera una ventana que permite registrarse a los usuarios.
    
    '''
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
    

def menu_admin(mensaje):
    '''Muestra el menú del administrador.
    
    '''
    inicio.geometry('1390x500')
    principal = Frame(inicio, width=1280, height=720, bg='white')
    principal.pack(expand=YES, fill=BOTH)
    frame_menu_admin = LabelFrame(principal,text='', width=400, height=720, padx=10)
    frame_menu_admin.pack(side=LEFT, padx=10)

    if mensaje == 1:
        frame_datos = Frame(principal, width=560, bg='white')
        frame_datos.pack(side=RIGHT, padx=150)
        Label(frame_datos, text='Welcome!!', font=('Courgette', 70), bg='white').grid(column=0, row=0, padx=150)
    else:
        frame_datos = Frame(principal, width=560, bg='white')
        frame_datos.pack(side=RIGHT, padx=150)
        Label(frame_datos, text='', font=('Courgette', 70), bg='white').grid(column=0, row=0, padx=150)
        frame_datos.destroy()

    Label(frame_menu_admin, image=img_admin).grid(column=0, row=0)
    usuario1 = Label(frame_menu_admin, text=nombre_usuario_dentro, font= ('Noto Serif', 15),  relief='solid', bd=2, padx=10, pady=10)
    usuario1.grid(column=0, row=1)

    espacio1 = Label(frame_menu_admin, text=' ')
    espacio1.grid(column=0, row=2)

    boton1 = Button(frame_menu_admin, text='Clientes', font= ('Noto Serif', 15), width=15, relief='groove', bd=3, command=partial(muestraClientes, principal))
    boton1.grid(column=0, row=3)

    boton2 = Button(frame_menu_admin, text='Habitaciones', font= ('Noto Serif', 15), width=15, relief='groove', bd=3, command=partial(muestraHabitacion, principal))
    boton2.grid(column=0, row=4)

    boton3 = Button(frame_menu_admin, text='Cierra sesión', font= ('Noto Serif', 15), width=15, relief='groove', bd=3, command=partial(cierraSesion, principal))
    boton3.grid(column=0, row=5)

    espacio2 = Label(frame_menu_admin, text=' ')
    espacio2.grid(column=0, row=6, pady=20)

    return principal

    

def muestraClientes(principal):
    '''Muestra los clientes del hotel.

    Recibe un frame principal, en el que pinta el menú en un lado y una TreeView con los clientes en la otra mitad.

    Parámetros:
    principal --> frame principal en el que se muestran los datos
    
    '''
    principal.destroy()
    principal = menu_admin(0)
    frame_datos = Frame(principal, width=560, bg='white')
    frame_datos.pack(side=RIGHT, padx=15)

    Label(frame_datos, text='Clientes', font=('Courgette', 40), bg='white').grid(column=0, row=0)

    muestra = ttk.Treeview(frame_datos, height=15, columns=('id_cliente', 'DNI', 'nombre', 'apellidos', 'fecha_nac', 'num_tlf', 'correo_e', 'direccion'))

    muestra.heading('id_cliente', text='ID')
    muestra.heading('DNI', text='DNI')
    muestra.heading('nombre', text='Nombre')
    muestra.heading('apellidos', text='Apellidos')
    muestra.heading('fecha_nac', text='F. Nacimiento')
    muestra.heading('num_tlf', text='Teléfono')
    muestra.heading('correo_e', text='Correo')
    muestra.heading('direccion', text='Dirección')

    muestra['show'] = 'headings'

    muestra.column('id_cliente', width=35)
    muestra.column('DNI', width=100)
    muestra.column('nombre', width=150)
    muestra.column('apellidos', width=250)
    muestra.column('fecha_nac', width=100)
    muestra.column('num_tlf', width=100)
    muestra.column('correo_e', width=170)
    muestra.column('direccion', width=200)

    muestra.grid(column=0, row=1, columnspan=10)

    boton1 = Button(frame_datos, text='Añadir', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(registraCliente))
    boton1.grid(column=1, row=2)
    
    boton4 = Button(frame_datos, text='Actualizar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(muestraClientes, principal))
    boton4.grid(column=2, row=2)

    boton2 = Button(frame_datos, text='Editar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(editaCliente, muestra))
    boton2.grid(column=3, row=2)

    boton3 = Button(frame_datos, text='Eliminar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(eliminaDato, 0, muestra))
    boton3.grid(column=4, row=2)

    #espacio1 = Label(frame_datos, text='', bg='blue')
    #espacio1.grid(column=4, row=2, padx=90)

    espacio2 = Label(frame_datos, text=' ', bg='white')
    espacio2.grid(column=0, row=3, pady=20)

    datos = co.recibeDatosC(1)
    for i in datos:
        muestra.insert('', END, values=i)

    return frame_datos


def muestraHabitacion(principal):
    '''Muestra los datos de las habitaciones del hotel.

    Recibe un frame principal, en el que pinta el menú en un lado y una TreeView con las habitaciones en la otra mitad.

    Parámetros:
    principal --> frame principal en el que se muestran los datos
    
    '''
    principal.destroy()
    principal = menu_admin(0)
    frame_datos = Frame(principal, width=560, bg='white')
    frame_datos.pack(side=RIGHT, padx=15, anchor='w')

    Label(frame_datos, text='Habitaciones', font=('Courgette', 40), bg='white').grid(column=0, row=0, columnspan=3)

    muestra = ttk.Treeview(frame_datos, style='mystyle.Treeview',height=15, columns=('id_habitacion', 'm2', 'piso', 'nombre', 'precio'))

    muestra.heading('id_habitacion', text='ID')
    muestra.heading('m2', text='m2')
    muestra.heading('piso', text='Piso')
    muestra.heading('nombre', text='Tipo')
    muestra.heading('precio', text='Precio')

    muestra['show'] = 'headings'

    muestra.column('id_habitacion', width=35)
    muestra.column('m2', width=100)
    muestra.column('piso', width=100)
    muestra.column('nombre', width=200)
    muestra.column('precio', width=100)

    muestra.grid(column=0, row=1, columnspan=10, padx=10, sticky='w')

    boton1 = Button(frame_datos, text='Añadir', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(registraHabitacion))
    boton1.grid(column=0, row=2, padx=5)

    boton4 = Button(frame_datos, text='Actualizar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(muestraHabitacion, principal))
    boton4.grid(column=1, row=2, sticky='e', padx=5)

    boton2 = Button(frame_datos, text='Editar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(editaHabitacion, muestra))
    boton2.grid(column=2, row=2, padx=5)

    boton3 = Button(frame_datos, text='Eliminar', font= ('Noto Serif', 11), width=11, relief='groove', bd=3, command=partial(eliminaDato, 1, muestra))
    boton3.grid(column=3, row=2, padx=5)

    espacio1 = Label(frame_datos, text='', bg='white')
    espacio1.grid(column=5, row=2, padx=300)

    espacio2 = Label(frame_datos, text=' ', bg='white')
    espacio2.grid(column=0, row=3, pady=20)

    datos = co.recibeDatosC(2)
    for i in datos:
        muestra.insert('', END, values=i)

    return frame_datos

def menu_usuario():
    '''Muestra el menú para los usarios sin permiso de administración.
    
    '''
    inicio.geometry('700x420')
    principal = Frame(inicio, width=1280, height=720, bg='white')
    principal.pack(expand=YES, fill=BOTH)
    frame_menu_admin = Frame(principal, width=400, height=720)
    frame_menu_admin.pack(side=LEFT)
    Label(frame_menu_admin, image=img_usuario).grid(column=0, row=0)
    usuario1 = Label(frame_menu_admin, text=nombre_usuario_dentro, font= ('Noto Serif', 15),  relief='solid', bd=2, padx=10, pady=10)
    usuario1.grid(column=0, row=1)

    espacio1 = Label(frame_menu_admin, text=' ')
    espacio1.grid(column=0, row=2)

    boton1 = Button(frame_menu_admin, text='Mi ficha', font= ('Noto Serif', 15), width=15, relief='groove', bd=3)
    boton1.grid(column=0, row=3)

    boton2 = Button(frame_menu_admin, text='Mis reservas', font= ('Noto Serif', 15), width=15, relief='groove', bd=3)
    boton2.grid(column=0, row=4)

    boton3 = Button(frame_menu_admin, text='Cierra sesión', font= ('Noto Serif', 15), width=15, relief='groove', bd=3, command=partial(cierraSesion, principal))
    boton3.grid(column=0, row=5)

    espacio2 = Label(frame_menu_admin, text=' ')
    espacio2.grid(column=0, row=6, pady=20)

def registraCliente():
    '''Genera una ventana que permite que un admin pueda registrar nuevos clientes.
    
    '''
    registro = Toplevel()
    registro.resizable(False, False)
    frame_cabecera = Frame(registro, width=500, bg='#2083E1')
    frame_cabecera.pack(fill='x', expand=True)
    texto1 = Label(frame_cabecera, text='Creación de un nuevo cliente', font= ('Noto Serif', 20), bg='#2083E1')
    texto1.grid(column=0, row=0)
    resto = Frame(registro, width=500, bg='white')
    resto.pack()
    zona1 = Frame(resto, width=50)
    zona1.pack(side=LEFT, padx=10)
    zona2 = Frame(resto, width=200, bg='white')
    zona2.pack(side=RIGHT, padx=10)
    Label(zona1, image=img_usuario, bg='white').grid(column=0, row=0)
    espacio1 = Label(zona2, text=' ', bg='white')
    espacio1.grid(column=0, row=0, pady=5)

    nombre_us0 = StringVar()
    nombre_us1 = Label(zona2, text='Nombre', font = ('Source Serif Pro', 15), bg='white')
    nombre_us1.grid(column=0, row=1, sticky='w', padx=6)
    nombre_us2 = Entry(zona2, textvariable=nombre_us0, font = ('Source Serif Pro', 15))
    nombre_us2.grid(column=0, row=2, sticky='w', padx=6)
    
    apellidos_us0 = StringVar()
    apellidos_us1 = Label(zona2, text='Apellidos', font = ('Source Serif Pro', 15), bg='white')
    apellidos_us1.grid(column=1, row=1, sticky='w', padx=6)
    apellidos_us2 = Entry(zona2, textvariable=apellidos_us0, font = ('Source Serif Pro', 15))
    apellidos_us2.grid(column=1, row=2, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=3, pady=1)

    dni0 = StringVar()
    dni1= Label(zona2, text='DNI', font = ('Source Serif Pro', 15), bg='white')
    dni1.grid(column=0, row=4, sticky='w', padx=6)
    dni2 = Entry(zona2, textvariable=dni0, font = ('Source Serif Pro', 15))
    dni2.grid(column=0, row=5, sticky='w', padx=6)
    
    tlf0 = StringVar()
    tlf1= Label(zona2, text='Teléfono', font = ('Source Serif Pro', 15), bg='white')
    tlf1.grid(column=1, row=4, sticky='w', padx=6)
    tlf2 = Entry(zona2, textvariable=tlf0, font = ('Source Serif Pro', 15))
    tlf2.grid(column=1, row=5, sticky='w', padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=6, pady=1)

    email0 = StringVar()
    email1 = Label(zona2, text='E-mail', font = ('Source Serif Pro', 15), bg='white')
    email1.grid(column=0, row=7, sticky='w', padx=6)
    email2 = Entry(zona2, textvariable=email0, font = ('Source Serif Pro', 15), width=42)
    email2.grid(column=0, row=8, sticky='w', columnspan=2, padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=9, pady=1)

    fechaN0 = StringVar()
    fechaN1= Label(zona2, text='F. Nac(aaaa-mm-dd)', font = ('Source Serif Pro', 15), bg='white')
    fechaN1.grid(column=0, row=10, sticky='w', padx=6)
    fechaN2 = Entry(zona2, textvariable=fechaN0, font = ('Source Serif Pro', 15))
    fechaN2.grid(column=0, row=11, sticky='w', padx=6)
    
    pais0 = StringVar()
    pais1= Label(zona2, text='País', font = ('Source Serif Pro', 15), bg='white')
    pais1.grid(column=1, row=10, sticky='w', padx=6)
    pais2 = Entry(zona2, textvariable=pais0, font = ('Source Serif Pro', 15))
    pais2.grid(column=1, row=11, sticky='w', padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=12, pady=1)

    dir0 = StringVar()
    dir1 = Label(zona2, text='Dirección', font = ('Source Serif Pro', 15), bg='white')
    dir1.grid(column=0, row=13, sticky='w', padx=6)
    dir2 = Entry(zona2, textvariable=dir0, font = ('Source Serif Pro', 15), width=42)
    dir2.grid(column=0, row=14, sticky='w', columnspan=2, padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=15, pady=1)
    #espacio3 = Label(zona2, text=' ', bg='white')
    #espacio3.grid(column=0, row=6, pady=1)


    #bot_registro = Button(zona2, text='Registrarme', command = partial(registrarse, nombre_us0, dni0, email0, contrasena0, contrasena3, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_registro = Button(zona2, text='Crear cliente', cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black', command=partial(creaCliente, nombre_us0, apellidos_us0, dni0, tlf0, email0, fechaN0, pais0, dir0, registro))
    bot_registro.grid(column=0, row=16, sticky='e', padx=5)
    bot_cancela = Button(zona2, text='Cancelar', command = partial(cancelar, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_cancela.grid(column=1, row=16, sticky='w',padx=5)

    Label(zona2, text=' ', bg='white').grid(column=0, row=17, pady=1)


def editaCliente(arbol):
    '''Genera una ventana en la que el admin pueda editar los datos de un cliente.
    
    '''
    registro = Toplevel()
    registro.resizable(False, False)
    frame_cabecera = Frame(registro, width=500, bg='#2083E1')
    frame_cabecera.pack(fill='x', expand=True)
    texto1 = Label(frame_cabecera, text='Creación de un nuevo cliente', font= ('Noto Serif', 20), bg='#2083E1')
    texto1.grid(column=0, row=0)
    resto = Frame(registro, width=500, bg='white')
    resto.pack()
    zona1 = Frame(resto, width=50)
    zona1.pack(side=LEFT, padx=10)
    zona2 = Frame(resto, width=200, bg='white')
    zona2.pack(side=RIGHT, padx=10)
    Label(zona1, image=img_usuario, bg='white').grid(column=0, row=0)
    espacio1 = Label(zona2, text=' ', bg='white')
    espacio1.grid(column=0, row=0, pady=5)

    datos1 = sacaDatos(0, arbol)
 
    nombre_us0 = StringVar()
    nombre_us0.set(datos1[0])
    nombre_us1 = Label(zona2, text='Nombre', font = ('Source Serif Pro', 15), bg='white')
    nombre_us1.grid(column=0, row=1, sticky='w', padx=6)
    nombre_us2 = Entry(zona2, textvariable=nombre_us0, font = ('Source Serif Pro', 15))
    nombre_us2.grid(column=0, row=2, sticky='w', padx=6)
    
    apellidos_us0 = StringVar()
    apellidos_us0.set(datos1[2])
    apellidos_us1 = Label(zona2, text='Apellidos', font = ('Source Serif Pro', 15), bg='white')
    apellidos_us1.grid(column=1, row=1, sticky='w', padx=6)
    apellidos_us2 = Entry(zona2, textvariable=apellidos_us0, font = ('Source Serif Pro', 15))
    apellidos_us2.grid(column=1, row=2, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=3, pady=1)

    dni0 = StringVar()
    dni0.set(datos1[3])
    dni1= Label(zona2, text='DNI', font = ('Source Serif Pro', 15), bg='white')
    dni1.grid(column=0, row=4, sticky='w', padx=6)
    dni2 = Entry(zona2, textvariable=dni0, font = ('Source Serif Pro', 15))
    dni2.grid(column=0, row=5, sticky='w', padx=6)
    
    tlf0 = StringVar()
    tlf0.set(datos1[4])
    tlf1= Label(zona2, text='Teléfono', font = ('Source Serif Pro', 15), bg='white')
    tlf1.grid(column=1, row=4, sticky='w', padx=6)
    tlf2 = Entry(zona2, textvariable=tlf0, font = ('Source Serif Pro', 15))
    tlf2.grid(column=1, row=5, sticky='w', padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=6, pady=1)

    email0 = StringVar()
    email0.set(datos1[5])
    email1 = Label(zona2, text='E-mail', font = ('Source Serif Pro', 15), bg='white')
    email1.grid(column=0, row=7, sticky='w', padx=6)
    email2 = Entry(zona2, textvariable=email0, font = ('Source Serif Pro', 15), width=42)
    email2.grid(column=0, row=8, sticky='w', columnspan=2, padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=9, pady=1)

    fechaN0 = StringVar()
    fechaN0.set(datos1[6])
    fechaN1= Label(zona2, text='F. Nac(aaaa-mm-dd)', font = ('Source Serif Pro', 15), bg='white')
    fechaN1.grid(column=0, row=10, sticky='w', padx=6)
    fechaN2 = Entry(zona2, textvariable=fechaN0, font = ('Source Serif Pro', 15))
    fechaN2.grid(column=0, row=11, sticky='w', padx=6)
    
    pais0 = StringVar()
    pais0.set(datos1[7])
    pais1= Label(zona2, text='País', font = ('Source Serif Pro', 15), bg='white')
    pais1.grid(column=1, row=10, sticky='w', padx=6)
    pais2 = Entry(zona2, textvariable=pais0, font = ('Source Serif Pro', 15))
    pais2.grid(column=1, row=11, sticky='w', padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=12, pady=1)

    dir0 = StringVar()
    dir0.set(datos1[8])
    dir1 = Label(zona2, text='Dirección', font = ('Source Serif Pro', 15), bg='white')
    dir1.grid(column=0, row=13, sticky='w', padx=6)
    dir2 = Entry(zona2, textvariable=dir0, font = ('Source Serif Pro', 15), width=42)
    dir2.grid(column=0, row=14, sticky='w', columnspan=2, padx=6)

    Label(zona2, text=' ', bg='white').grid(column=0, row=15, pady=1)
    #espacio3 = Label(zona2, text=' ', bg='white')
    #espacio3.grid(column=0, row=6, pady=1)


    #bot_registro = Button(zona2, text='Crear cliente', cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black', command=partial(creaCliente, nombre_us0, apellidos_us0, dni0, tlf0, email0, fechaN0, pais0, dir0, registro))
    bot_registro = Button(zona2, text='Crear cliente', cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_registro.grid(column=0, row=16, sticky='e', padx=5)
    bot_cancela = Button(zona2, text='Cancelar', command = partial(cancelar, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_cancela.grid(column=1, row=16, sticky='w',padx=5)

    Label(zona2, text=' ', bg='white').grid(column=0, row=17, pady=1)


def registraHabitacion():
    '''Genera una ventana en la que el admin puede añadir una nueva habitación.
    
    '''
    registro = Toplevel()
    registro.resizable(False, False)
    frame_cabecera = Frame(registro, width=500, bg='#2083E1')
    frame_cabecera.pack(fill='x', expand=True)
    texto1 = Label(frame_cabecera, text='Añada una nueva habitación', font= ('Noto Serif', 20), bg='#2083E1')
    texto1.grid(column=0, row=0)
    resto = Frame(registro, width=500, bg='white')
    resto.pack()
    zona1 = Frame(resto, width=50)
    zona1.pack(side=LEFT, padx=10)
    zona2 = Frame(resto, width=200, bg='white')
    zona2.pack(side=RIGHT, padx=10)
    Label(zona1, image=img_hab, bg='white').grid(column=0, row=0)
    espacio1 = Label(zona2, text=' ', bg='white')
    espacio1.grid(column=0, row=0, pady=5)

    m20 = StringVar()
    m21 = Label(zona2, text='m2', font = ('Source Serif Pro', 15), bg='white')
    m21.grid(column=0, row=1, sticky='w', padx=6)
    m22 = Entry(zona2, textvariable=m20, font = ('Source Serif Pro', 15))
    m22.grid(column=0, row=2, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=3, pady=1)
    
    tipo0 = StringVar()
    tipo1 = Label(zona2, text='Tipo', font = ('Source Serif Pro', 15), bg='white')
    tipo1.grid(column=0, row=4, sticky='w', padx=6)
    tipo2 = ttk.Combobox(zona2, font = ('Source Serif Pro', 15), state='readonly', textvariable=tipo0)
    tipo2['values'] = ('', 'Individual', 'Individual -vista al mar', 'Doble', 'Doble -vista al mar', 'Familiar', 'Familiar -vista al mar', 'Suite', 'Suite -vista al mar')
    tipo2.grid(column=0, row=5, sticky='w',)
    
    #tipo2 = Entry(zona2, textvariable=tipo0, font = ('Source Serif Pro', 15))
    #tipo2.grid(column=0, row=5, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=6, pady=1)

    piso0 = StringVar()
    piso1= Label(zona2, text='Piso', font = ('Source Serif Pro', 15), bg='white')
    piso1.grid(column=0, row=7, sticky='w', padx=6)
    piso2 = Entry(zona2, textvariable=piso0, font = ('Source Serif Pro', 15))
    piso2.grid(column=0, row=8, sticky='w', padx=6)
    

    Label(zona2, text=' ', bg='white').grid(column=0, row=9, pady=1)

    
    #bot_registro = Button(zona2, text='Registrarme', command = partial(registrarse, nombre_us0, dni0, email0, contrasena0, contrasena3, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_registro = Button(zona2, text='Añadir habitación', cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black', command=partial(creaHab, m20, piso0, tipo0, registro))
    bot_registro.grid(column=0, row=10, sticky='e', padx=5)
    bot_cancela = Button(zona2, text='Cancelar', command = partial(cancelar, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_cancela.grid(column=1, row=10, sticky='w',padx=5)

    Label(zona2, text=' ', bg='white').grid(column=0, row=11, pady=1)


def editaHabitacion(arbol):
    '''Genera una ventana en la que el admin puede editar una habitación.
    
    '''
    registro = Toplevel()
    registro.resizable(False, False)
    frame_cabecera = Frame(registro, width=500, bg='#2083E1')
    frame_cabecera.pack(fill='x', expand=True)
    texto1 = Label(frame_cabecera, text='Editar una habitación', font= ('Noto Serif', 20), bg='#2083E1')
    texto1.grid(column=0, row=0)
    resto = Frame(registro, width=500, bg='white')
    resto.pack()
    zona1 = Frame(resto, width=50)
    zona1.pack(side=LEFT, padx=10)
    zona2 = Frame(resto, width=200, bg='white')
    zona2.pack(side=RIGHT, padx=10)
    Label(zona1, image=img_hab, bg='white').grid(column=0, row=0)
    espacio1 = Label(zona2, text=' ', bg='white')
    espacio1.grid(column=0, row=0, pady=5)

    datos1 = sacaDatos(1, arbol)

    m20 = StringVar()
    m20.set(datos1[0])
    m21 = Label(zona2, text='m2', font = ('Source Serif Pro', 15), bg='white')
    m21.grid(column=0, row=1, sticky='w', padx=6)
    m22 = Entry(zona2, textvariable=m20, font = ('Source Serif Pro', 15))
    m22.grid(column=0, row=2, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=3, pady=1)
    
    tipo0 = StringVar()
    tipo0.set(datos1[1])
    tipo1 = Label(zona2, text='Tipo', font = ('Source Serif Pro', 15), bg='white')
    tipo1.grid(column=0, row=4, sticky='w', padx=6)
    tipo2 = ttk.Combobox(zona2, font = ('Source Serif Pro', 15), state='readonly', textvariable=tipo0)
    tipo2['values'] = ('', 'Individual', 'Individual -vista al mar', 'Doble', 'Doble -vista al mar', 'Familiar', 'Familiar -vista al mar', 'Suite', 'Suite -vista al mar')
    tipo2.grid(column=0, row=5, sticky='w',)
    
    #tipo2 = Entry(zona2, textvariable=tipo0, font = ('Source Serif Pro', 15))
    #tipo2.grid(column=0, row=5, sticky='w', padx=6)
    
    Label(zona2, text=' ', bg='white').grid(column=0, row=6, pady=1)

    piso0 = StringVar()
    piso0.set(datos1[2])
    piso1= Label(zona2, text='Piso', font = ('Source Serif Pro', 15), bg='white')
    piso1.grid(column=0, row=7, sticky='w', padx=6)
    piso2 = Entry(zona2, textvariable=piso0, font = ('Source Serif Pro', 15))
    piso2.grid(column=0, row=8, sticky='w', padx=6)
    

    Label(zona2, text=' ', bg='white').grid(column=0, row=9, pady=1)

    
    #bot_registro = Button(zona2, text='Registrarme', command = partial(registrarse, nombre_us0, dni0, email0, contrasena0, contrasena3, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_registro = Button(zona2, text='Actualizar', cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black', command=partial(editaHab, 1, m20, tipo0, piso0, datos1[3], registro))
    bot_registro.grid(column=0, row=10, sticky='e', padx=5)
    bot_cancela = Button(zona2, text='Cancelar', command = partial(cancelar, registro), cursor = 'hand1', font = ('Source Serif Pro', 10), fg='black')
    bot_cancela.grid(column=1, row=10, sticky='w',padx=5)

    Label(zona2, text=' ', bg='white').grid(column=0, row=11, pady=1)
    
################
# FIN VENTANAS #
################

########################################
# FUNCIONES PARA LLAMAR AL CONTROLADOR #
########################################

def sacaDatos(indice, arbol):
    '''Recibe de los datos del objeto seleccionado.

    Recibe un indice para saber que tipo de objeto es y una TreeView que contiene el objeto seleccionado para 
    la extracción de datos

    Parámetros:
    indice --> indica el objeto al que se refiere
    arbol ---> TreeView con el objeto seleccionado

    indice == 0 --> cliente
    indice == 1 --> habitación
    
    '''
    item_seleccionado = arbol.selection()[0]
    valores = tuple(arbol.item(item_seleccionado)['values'])
    print(valores)
    if indice == 0:
        datos = co.devuelveDatos(0, valores)
    elif indice == 1:
        datos = co.devuelveDatos(1, valores)

    return datos

def editaHab(ind, m2, cat, piso, ide, pant):
    '''Edita los datos de una habitación.

    Parámetros:
    m2 ----> metros cuadrados de la habitación
    cat ---> categoría de la habitación
    piso --> piso en el que se encuentra la habitación
    ide ---> id de la habitación a modificar
    pant --> frame sobre el que se pinta
    
    '''
    co.editaDatosHabC(m2, cat, piso, ide)
    messagebox.showinfo('Actualizado', 'Datos actualizados correctamente')
    pant.destroy()
    

def cancelar(pant):
    '''Destruye una pantalla.
    
    '''
    pant.destroy()

def registrarse(u, d, e, c1, c2, pant):
    '''Permite al usuario crear una cuenta.

    Pueden darse varios casos:
        -Datos introducidos correctamente: muestra un mensaje de exito
        -El usuario ya existe: muesta un mensaje olbigando que el cliente cambie el usuario para poder registrarse
        -DNI ya existe: olbiga al usuario a introducir otro DNI
        -Las dos contraseñas no coinciden: obliga al usuario a poner la segunda contraseña correctamente

    Parámetros:
    u -----> nombre de usuario con el que iniciará sesión
    d -----> dni del usuario
    e -----> correo electrónico del usuario
    c1 ----> contraseña del usuario
    c2 ----> contraseña de verificación con la primera contraseña
    pant --> pantalla sobre la que se muestran datos
    
    '''
    if str(c1.get()) != str(c2.get()):
        messagebox.showwarning('Error', 'Las contraseñas con coinciden')
    
    else:
        exito = co.registraUsuarioC(u.get(), d.get(), e.get() ,c1.get())
        if exito == 1:
            messagebox.showinfo('Usuario creado', 'Su usuario se ha creado exitosamente!')
            pant.destroy()
        elif exito == 2:
            valor = messagebox.askretrycancel('Error', 'El DNI que ha introducido ya se encuentra registrado.')
            if valor:
                d.set('')
            else:
                pant.destroy()
        elif exito == 3:
            valor = messagebox.askretrycancel('Error', 'El usuario que ha introducido ya se encuentra registrado.')
            if valor:
                u.set('')
            else:
                pant.destroy()

def creaHab(metros, piso, cat, pant):
    '''Permite al admin crear habitaciones.

    Parámetros:
    metros --> metros cuadrados de la habitación
    piso ----> piso en el que se encuentra la habitacion
    cat -----> categoria de la habitación
    pant ----> pantalla sobre la que se muestran los datos
    
    '''
    co.aniadeHabitacionC(metros, piso, cat)
    messagebox.showinfo('Habitacion creada', 'Su habitación se ha creado satisfactoriamente')
    pant.destroy()

def creaCliente(nombre, apellidos, dni, tlf, email, fechaN, pais, direc, pant):
    '''Permite al admin crear nuevos clientes.

    Parámetros:
    nombre --> nombre del cliente
    apellidos --> apellidos del cliente
    dni --> dni del cliente
    tlf --> número de teléfono del cliente
    email --> correo electrónico del cliente
    fechaN --> fecha de nacimiento del cliente
    pais --> pais de residencia del cliente
    direc --> dirección del cliente
    pant --> pantalla sobre la que se muestran datos
    
    '''
    co.creaClienteC(nombre, apellidos, dni, tlf, email, fechaN, pais, direc)
    messagebox.showinfo('Crear Cliente', 'Cliente creado exitosamente')
    pant.destroy()

def eliminaDato(indice, arbol):
    '''Elimina un objeto de una TreeView.

    Elimina un objeto de una TreeView en funcion del indice que se le pasa.

    Parámetros:
    indice --> elige el tipo de objeto que se eliminará
    arbol ---> TreeView en la que se encuentra el objeto a eliminar

    indice == 0 --> cliente
    indice == 1 --> habitación
    
    '''
    item_seleccionado = arbol.selection()[0]
    valores = tuple(arbol.item(item_seleccionado)['values'])
    print(valores)
    co.eliminaDatosC(indice, valores)
    if indice == 0:
        messagebox.showinfo('Delete', 'Cliente borrado exitosamente')
    elif indice == 1:
        messagebox.showinfo('Delete', 'Habitacion eliminada exitosamente')

def iniciaSesionV(u, c, pant):
    '''Permite al usuario logearse en la aplicación.

    Recibe un usuario y contraseña, si los datos son correctos y coinciden dentro de la base de datos, entrará a 
    la aplicación, si los datos no son correctos, muestra un mensaje de que los datos son incorrectos.

    Parámetros:
    u -----> usuario para logearse
    c -----> contraseña del usuario
    pant --> pantalla en la que muestran los datos
    
    '''
    print(u.get())
    print(c.get())
    #pant.destroy()
    global rol_usuario_dentro
    global nombre_usuario_dentro
    global dni_usuario_dentro
    comprobacion, dni_usuario_dentro = co.iniciaSesionC(u.get(), c.get())
    nombre_usuario_dentro = u.get()
    rol_usuario_dentro = 'admin'
    #nombre_usuario_dentro = 'severyn'
    #comprobacion = True
    if comprobacion:
        # Inicio de sesion correcto
        vent = Toplevel()
        miframe = Frame(vent, width=200, height=400)
        miframe.pack()
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
        pant.destroy()
        menu_admin(1)
        #menu_usuario()
    else:
        messagebox.showerror('Error', 'Usuario o contraseña incorrecta')

def cierraSesion(pant):
    '''Cierra sesión para un usuario.

    Cierra sesión y restablece el valor de las variables globales a una cadena
    de caracteres vacía.

    Parámetros:
    pant --> pantalla en la que se pintan los datos
    
    '''
    pant.destroy()
    rol_usuario_dentro = ''
    nombre_usuario_dentro = ''
    dni_usuario_dentro = ''
    ventana_inicio()


#################
# FIN FUNCIONES #
#################

ventana_inicio()