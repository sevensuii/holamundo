import sys
sys.path.append('..')

import pymysql

# Conexion a la base de datos
try:
    conexion = pymysql.connect(host='127.0.0.1', user='root', password='111', db='HOTEL_sql_2')
    print('Estado de la base de datos: conecatada')

    try:
        with conexion.cursor() as cursor:
            #consulta = 'INSERT INTO tb_aficion(id_aficion, tipo, obs) VALUES(%s, %s, %s);'
            #Se puede llamar muchas veces a consulta con distintos datos
            #cursor.execute(consulta, (1, 'Motocross', ''))
            #cursor.execute(consulta, (2, 'Surf', ''))

            #Consulta de datos
            cursor.execute('SELECT * FROM tb_aficiones;')
            aficiones = cursor.fetchall()   #Traemos todo a la lista
            for i in aficiones:
                print(i)

            
        conexion.commit()
    finally:
        conexion.close()

except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print('Ocurrio un error al conectar: ', e)

