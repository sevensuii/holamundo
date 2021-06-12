import pymysql

try:
    basedatos = pymysql.connect(host='127.0.0.1', user='root', password='111', db='HOTEL_sql_2')
    #print('Estado de la Base de datos: conectada')

except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print('Ocurrio un error al conectar: ', e)

def compruebaUsuario(usuario, contrasena):
    '''Comprueba si un usuario existe en la base de datos.

    Recibe un usuario, lo busca en la base de datos, si este existe, saca su contraseña con la recibida como parámetro, 
    y si coinciden, devuelve True
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT clave FROM usuarios WHERE nik LIKE %s'
            cursor.execute(consulta, (usuario))
            contrasena2 = str(cursor.fetchall())
            contrasena2 = contrasena2.strip("(),'")
            print(str(contrasena2))
            if contrasena == contrasena2:
                return True
            else:
                return False

    finally:
        #basedatos.close()
        None

def cierraBaseDAtos():
    '''Cierra la conexión con la base de datos
    
    '''
    basedatos.close()


def recibeClientes():
    '''Devuelve todos los clientes de la base de datos.

    Recibe todos los clientes de la base de datos, listos para ser mostrados en una TreeView
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT id_cliente, DNI, nombre, apellidos, fecha_nac, num_tlf, correo_e, direccion FROM tb_cliente'
            cursor.execute(consulta)
            resultados = cursor.fetchall()
            print(resultados)
            return resultados

    finally:
        #basedatos.close()
        None

def recibeHabitaciones():
    '''Devuelve todas las habitaciones que hay en tb_habitacion.
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT id_habitacion, m2, piso, nombre, precio FROM tb_habitacion, tb_categoria WHERE tb_habitacion.id_categoria = tb_categoria.id_categoria ORDER BY id_habitacion'
            cursor.execute(consulta)
            resultados = cursor.fetchall()
            print(resultados)
            return resultados

    finally:
        #basedatos.close()
        None



def consultaUsuario(usuario):
    '''Consulta si un usuario existe en la base de datos.

    Recibe el nombre del usuario como cadena de caracteres, busca en la base de datos si existe,
    devuelve el nombre del usuario, si no existe, devuelve una cadena de caracteres vacía.
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT nik FROM usuarios WHERE nik LIKE %s'
            cursor.execute(consulta, (usuario))
            usuario2 = str(cursor.fetchall())
            usuario2 = usuario2.strip("(),'")

            return str(usuario2)
    finally:
        None

def consultaDNI(dni1):
    '''Consulta si el dni existe dentro de la base de datos.

    Recibe un dni como cadena de caracteres, busca en la base de datos si existe, 
    devuelve el dni, si no existe, devuelve una cadena de caracteres vacía.
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT dni FROM usuarios WHERE dni LIKE %s'
            cursor.execute(consulta, (dni1))
            dni2 = str(cursor.fetchall())
            dni2 = dni2.strip("(),'")

            return str(dni2)
    finally:
        None

def devuelveDNIusuario(usuario):
    '''Devuelve el dni de un usuario.

    Recibe un usuario como cadena de caraceteres, busca en la base de datos si existe
    dni para ese usuario, si existe devuelve el dni del usuario, si no existe, devuelve una
    cadena de caracteres vacía.
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT dni FROM usuarios WHERE nik LIKE %s'
            cursor.execute(consulta, (usuario))
            dni2 = str(cursor.fetchall())
            dni2 = dni2.strip("(),'")

            return str(dni2)
    finally:
        None

def creaUsuario(usr, dni, email, contra):
    '''Crea el usuario dentro de la tabla usuarios.

    Crea un nuevo usuario con los parámetros que se le pasan.

    Parámetros:
    usr -----> nombre del usuario (no puede ser una cadena de caracteres vacía)
    dni -----> dni del usuario (no puede ser una cadena de caracteres vacía)
    email ---> email del usuario (no debería de ser una cadena de caracteres vacía pero se aceptaría)
    contra --> contraseña del usuario (no puede ser una cadena de caracteres vacía)
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'SELECT id_usuario FROM usuarios ORDER BY id_usuario DESC LIMIT 1'
            cursor.execute(consulta1)
            ultimo_id = str(cursor.fetchall())
            ultimo_id = int(ultimo_id.strip("(),'"))
            ultimo_id = ultimo_id + 1
            consulta2 = 'INSERT INTO usuarios(id_usuario, dni, nik, clave, email, rol) VALUES(%s, %s, %s, %s, %s, %s)'
            cursor.execute(consulta2, (ultimo_id, dni, usr, contra, email, 'usr'))
        basedatos.commit()

            #return str(dni2)
    finally:
        None

def eliminaHabitacion(id):
    '''Elimina una habitación.

    Elimina la habitación deseada de la tb_habitacion.

    Parametros:
    id --> id de la habitación que se desea borrar
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'DELETE FROM tb_habitacion WHERE id_habitacion = %s'
            cursor.execute(consulta1, (id))
        basedatos.commit()
    finally:
        None

def eliminaCliente(id):
    '''Elimina un cliente.

    Elimina el cliente deseado de la tb_cliente.

    Parámetros:
    id --> id del cliente que se desea borrar
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'DELETE FROM tb_cliente WHERE id_cliente = %s'
            cursor.execute(consulta1, (id))
        basedatos.commit()
    finally:
        None

def creaClienteM(nombre, apellidos, dni, tlf, email, fecha, pais, dire):
    '''Crea un cliente en la base de datos.

    Crea un cliente dentro de tb_cliente.

    Parámetros:
    nombre -----> nombre del cliente (no puede ser una cadena de caracteres vacía)
    apelldiso --> apellidos del cliente (no puede ser una cadena de caracteres vacía)
    dni --------> dni del cliente (no puede ser una cadena de caracteres vacía)
    tlf --------> número de teléfono del cliente (no debería una cadena de caracteres vacía, pero no lanzaría error si lo fuera)
    email ------> correo electrónico del cliente (no debería una cadena de caracteres vacía, pero no lanzaría error si lo fuera)
    fecha ------> fecha de nacimiento del cliente (debe tener el siguiente formato: aaaa-mm-dd)
    pais -------> país de residencia del cliente (no debería una cadena de caracteres vacía, pero no lanzaría error si lo fuera)
    dire -------> dirección del domicilio del cliente (no debería una cadena de caracteres vacía, pero no lanzaría error si lo fuera)
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'SELECT id_cliente FROM tb_cliente ORDER BY id_cliente DESC LIMIT 1'
            cursor.execute(consulta1)
            ultimo_id = str(cursor.fetchall())
            ultimo_id = int(ultimo_id.strip("(),'"))
            ultimo_id = ultimo_id + 1
            consulta2 = 'INSERT INTO tb_cliente(id_cliente, DNI, nombre, apellidos, fecha_nac, correo_e, direccion, num_tlf, pais) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)'
            cursor.execute(consulta2, (ultimo_id, dni, nombre, apellidos, fecha, email, dire, tlf, pais))
        basedatos.commit()

            #return str(dni2)
    finally:
        None

def devuelveDatosClienteM(ide):
    '''Devuelve los datos del cliente deseado.

    Devuelve todos los datos del cliente, después de haberlos filtrado para devolver cada campo en una lista.

    Parámetros:
    ide --> id del cliente que desea sacar los datos
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT nombre, apellidos, DNI, num_tlf, correo_e, fecha_nac, pais, direccion, id_cliente FROM tb_cliente WHERE id_cliente = %s LIMIT 1'
            cursor.execute(consulta, (ide))
            datos = str(cursor.fetchall())
            datos = datos[2:].replace('),', '')
            datos = datos.replace(')', '')
            datos = datos.replace("'", '')
            datos = datos.split(', ')
            print(datos)

            return datos

    finally:
        None

def devuelveDatosHab(ide):
    '''Devuelve los datos de una habitación.

    Devuelve los datos de la habitación, después de haberlos filtrado para devolver cada campo en una lista.

    Parámetros:
    ide --> id de la habitacion que desea sacar datos
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta = 'SELECT m2, nombre, piso, id_habitacion FROM tb_habitacion, tb_categoria WHERE tb_habitacion.id_categoria = tb_categoria.id_categoria AND id_habitacion = %s LIMIT 1'
            cursor.execute(consulta, (ide))
            datos = str(cursor.fetchall())
            datos = datos[2:].replace('),', '')
            datos = datos.replace(')', '')
            datos = datos.replace("'", '')
            datos = datos.split(', ')
            #print(datos)

            return datos

    finally:
        None

def actualizaHab(ide, m2, nombre, piso):
    '''Actualiza los datos de una habitación.

    Actualiza los datos de la habitación del id proporcionado.

    Parámetros:
    ide -----> id de la habitación
    m2 ------> metros cuadrados de la habitación
    nombre --> categoría de la habitación
    piso ----> piso en el que se encuentra la habitación
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta3 = 'SELECT id_categoria FROM tb_categoria WHERE tb_categoria.nombre LIKE %s ORDER BY id_categoria DESC LIMIT 1'
            cursor.execute(consulta3, (nombre))
            categor = str(cursor.fetchall())
            print(categor)
            categor = int(categor.strip("(),'"))
            consulta1 = 'UPDATE tb_habitacion SET m2 = %s, piso = %s, id_categoria = %s WHERE id_habitacion = %s'
            cursor.execute(consulta1, (m2, piso, categor, ide))
        basedatos.commit()

            #return str(dni2)
    finally:
        None

def aniadeHabitacionM(m2, piso, cat):
    '''Crea una nueva habitación.

    Crea una nueva habitación con los parámetros proporcionados.

    Parámetros:
    m2 ----> metros cuadrados de la habitación
    piso --> piso en el que se encuentra la habitación
    cat ---> categoría de la habitación
    
    '''
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'SELECT id_habitacion FROM tb_habitacion ORDER BY id_habitacion DESC LIMIT 1'
            cursor.execute(consulta1)
            ultimo_id = str(cursor.fetchall())
            ultimo_id = int(ultimo_id.strip("(),'"))
            ultimo_id = ultimo_id + 1
            consulta3 = 'SELECT id_categoria FROM tb_categoria WHERE tb_categoria.nombre LIKE %s ORDER BY id_categoria DESC LIMIT 1'
            cursor.execute(consulta3, (cat))
            categor = str(cursor.fetchall())
            categor = int(categor.strip("(),'"))
            consulta2 = 'INSERT INTO tb_habitacion(id_habitacion, m2, piso, id_categoria) VALUES(%s, %s, %s, %s)'
            cursor.execute(consulta2, (ultimo_id, m2, piso, categor))
        basedatos.commit()

            #return str(dni2)
    finally:
        None

#INSERT INTO usuarios(id_usuario, dni, nik, clave, email, rol) 
#VALUES(5, '32546532O', 'pepe', 'pepa', 'pepe@gmail.com', 'usr')

#compruebaUsuario('Linda', '1111')
#consultaDNI('45322197B')
#creaUsuario('maria', '23234587E', 'maria@gmail.com', 'qekl')

# Conexion a la base de datos
#try:
#    conexion = pymysql.connect(host='127.0.0.1', user='root', password='111', db='HOTEL_sql_2')
#    print('Estado de la base de datos: conecatada')
#
#    try:
#        with conexion.cursor() as cursor:
#            #consulta = 'INSERT INTO tb_aficion(id_aficion, tipo, obs) VALUES(%s, %s, %s);'
#            #Se puede llamar muchas veces a consulta con distintos datos
#            #cursor.execute(consulta, (1, 'Motocross', ''))
#            #cursor.execute(consulta, (2, 'Surf', ''))
#
#            #Consulta de datos
#            cursor.execute('SELECT * FROM tb_aficiones;')
#            aficiones = cursor.fetchall()   #Traemos todo a la lista
#            for i in aficiones:
#                print(i)
#
#        conexion.commit() #Se necesita para que los cambios sean guardados
#            
#    finally:
#        conexion.close()
#
#except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
#    print('Ocurrio un error al conectar: ', e)