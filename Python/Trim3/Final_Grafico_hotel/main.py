import pymysql

try:
    conexion = pymysql.connect(host='127.0.0.1', user='root', password='111', db='HOTEL_sql_2')
    print('Estado de la base de datos: conecatada')
except (pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print('Ocurrio un error al conectar: ', e)