import pymysql

try:
    basedatos = pymysql.connect(host='127.0.0.1', user='root', password='111', db='HOTEL_sql_2')
    #print('Estado de la Base de datos: conectada')

except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print('Ocurrio un error al conectar: ', e)

def compruebaUsuario(usuario, contrasena):
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
    basedatos.close()


def recibeClientes():
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
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'DELETE FROM tb_habitacion WHERE id_habitacion = %s'
            cursor.execute(consulta1, (id))
        basedatos.commit()
    finally:
        None

def eliminaCliente(id):
    try:
        with basedatos.cursor() as cursor:
            consulta1 = 'DELETE FROM tb_cliente WHERE id_cliente = %s'
            cursor.execute(consulta1, (id))
        basedatos.commit()
    finally:
        None

def creaClienteM(nombre, apellidos, dni, tlf, email, fecha, pais, dire):
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