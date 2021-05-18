#def esPrimo(num):
#    cont = 0
#    for i in range(1, num+1):
#        if num % i == 0:
#            cont += 1
#
#    if cont == 2:
#        return True
#    else:
#        return False
#
#def esPalindromo(num):
#    cad = str(num)
#    cad1 = list(cad)
#    cad2 = list(reversed(cad1))
#
#    if cad1 == cad2:
#        return True
#    else:
#        return False
#
#
#num = int( input("Introduzca su numero: "))
#bucle = True
#cont = int(num)
#
#while bucle:
#    if esPalindromo(num) and esPrimo(num):
#        print("El numero " + str(cont) + " es palindromo y primo")
#        bucle = False
#    
#    else:
#        cont += 1
#


###################
###################

#num = str( input("Introduzca la secuencia: "))
#
#numero = []
#repes = []
#
#cont = 0
#valor = num[0]
#
#for i in num:
#    if i == valor:
#        cont += 1
#
#    else:
#        numero.append(valor)
#        repes.append(cont)
#        valor = i
#        cont = 1
#numero.append(valor)
#repes.append(cont)
##Salida
#print("Su numero codificado es:")
#for i in range(len(numero)):
#    print(repes[i], end="")
#    print(numero[i], end="")


def multiplica(lta):
    if len(lta) == 0:
        return 1
    else:
        num = lta[0]
        lta.pop(0)

        return num * multiplica(lta)

positivi = False
lista = [2, 4, 3, 1]
cop_lista = lista[:]
for i in lista:
    if i > 0:
        positivi = True

    else:
        print("Tiene un numero negativo o igual a 0, no se hara la multplicacion")

if positivi:
    resultado = multiplica(cop_lista)
    print(resultado)