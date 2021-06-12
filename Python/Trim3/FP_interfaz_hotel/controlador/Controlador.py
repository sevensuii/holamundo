import os, sys
currentdir = os.path.dirname(os.path.realpath(__file__))
parentdir = os.path.dirname(currentdir)
sys.path.append(parentdir)

import modelo.Modelo as mo

def iniciaSesionC(u, c):
    '''Devuelve los datos necesarios para iniciar sesión.

    Comprueba el usuario y la contraseña dentro de la base de datos y los devuelve.

    Parámetros:
    u --> usuario a comprobar
    c --> contraseña del usuario a comprobar
    
    '''
    valor1 = mo.compruebaUsuario(u, c)
    valor2 = mo.devuelveDNIusuario(u)
    return valor1, valor2

def registraUsuarioC(u, d, e, c):
    '''Registra un nuevo usuario.

    Llama a la funcion creaUsuario del modelo para crear un nuevo usuario no administrador
    con los parámetros proporcionados.

    Parámetros:
    u --> usuario del nuevo usuario
    d --> dni del nuevo usuario
    e --> correo electrónico del nuevo usuario
    c --> contraseña del nuevo usuario
    
    '''
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
    '''Recibe datos en función del índice.

    Si se proporciona un 1, recibirá los datos de todos los clientes.
    Si se proporciona un 2, recibirá los datos de todas las habitaciones.

    Parámetros:
    opcion --> índice para recibir diferentes datos
    
    '''
    if opcion == 1:
        resultado = mo.recibeClientes()
        return resultado
    elif opcion == 2:
        resultado = mo.recibeHabitaciones()
        return resultado

def aniadeHabitacionC(m2, piso, cat):
    '''Crea una nueva habitación.

    Se comunica con aniadeHabitacionM del modelo para crear una nueva habitacion con los parámetros proporcionados.

    Parámetros:
    m2 ----> metros cuadrados de la habitacón
    piso --> piso en el que se encuentra la habitación
    cat ---> categoría de la habitación
    
    '''
    metros = int(m2.get())
    pi = int(piso.get())
    categ = str(cat.get())
    print(metros)
    print(pi)
    print(categ)

    mo.aniadeHabitacionM(metros, pi, categ)

def eliminaDatosC(ind, id):
    '''Elimina un cliente o habitación.

    Dependiendo del índice que se le proporcione, se comunicará con el modelo para eliminar o un cliente o una habitación.
    
    Parámetros:
    ind --> índice para borrar un dato u otro
    id ---> id del dato a borrar

    ind == 0 --> se borrará un cliente
    ind == 1 --> se borrará una habitación
    
    '''
    valor = id[0]
    if ind == 0:
        mo.eliminaCliente(valor)
    elif ind == 1:
        mo.eliminaHabitacion(valor)

def creaClienteC(nombre, apellidos, dni, tlf, email, fecha, pais, dire):
    '''Crea un nuevo cliente.

    Con los parámetros recibidos, transforma los objetos en cadenas de caracteres y se comunica
    con el modelo para crear un nuevo cliente.

    Parámetros:
    nombre -----> objeto que contiene el nombre del cliente
    apellidos --> objeto que contiene el apellidos del cliente
    dni --------> objeto que contiene el dni del cliente
    tlf --------> objeto que contiene el número de teléfono del cliente
    email ------> objeto que contiene el correo electrónico del cliente
    fecha ------> objeto que contiene la fecha de nacimiento del cliente
    pais -------> objeto que contiene el pais de residencia del cliente
    direccion --> objeto que contiene la dirección del cliente
    
    '''
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
    '''Devuelve datos del cliente o habitación en función del índice.

    Recibe un índice y en función de éste recibe los datos de un cliente o una habitación.

    Parámetros:
    ind --> índice pare recibir datos
    id ---> id del objeto que se desea recibir los datos

    ind == 0 --> devuelve los datos del cliente
    ind == 1 --> devuelve los datos de la habitación
    
    '''
    if ind == 0:
        datos = mo.devuelveDatosClienteM(int(id[0]))
    elif ind == 1:
        datos = mo.devuelveDatosHab(int(id[0]))

    return datos

def editaDatosHabC(m2, cat, piso, ide):
    '''Edita los datos de una habitación.

    Recibe unos objetos, extrae información de ellos como cadena de caracteres, y se comunica 
    con el modelo para editar los datos de una habitación.

    Parámetros:
    m2 ----> metros cuadrados de la habitación
    cat ---> categoría de la habitación
    piso --> piso en el que se encuentra la habitación
    ide ---> id de la habitación que se desea editar
    
    '''
    m21 = m2.get()
    cat1 = cat.get()
    piso1 = piso.get()
    mo.actualizaHab(int(ide),m21, cat1, piso1)