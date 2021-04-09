def esPrimo( a ):
    div = 0
    cont = 1
    while div <= 2 and cont <= a:
        resto = a % cont
        if not resto:
            div += 1
        cont += 1
    if div == 2:
        return True
    else:
        return False

num = int( input("Introduzca el numero: "))
primo = esPrimo(num)
if primo:
    print(num, "es primo")
else:
    print(num, "no es primo")