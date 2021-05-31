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

#compruebaUsuario('Linda', '1111')



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