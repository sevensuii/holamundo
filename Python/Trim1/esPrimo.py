from datetime import datetime

cont = 0

inicio = datetime.now()
for numero in range(1, 1000):
    primo = True
    for i in range(2, numero):
        if not numero % i:
            primo = False
    if primo:
        print(numero, end="\t")
        cont += 1
        if cont == 4:
            print()
            cont = 0
fin = datetime.now()
print("Ha tardado: "+ str(inicio.minute - fin.minute)+" minutos y "+ str(inicio.second - fin.second)+" segundos")