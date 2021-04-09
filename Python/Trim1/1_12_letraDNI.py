dni = int(input("Introduzca solo los numeros de su DNI por orden: "))

if dni > 0 and dni < 99999999:
    resto = int(dni % 23)
    print(resto)
    if resto == 0:
        print("Su DNI es: " + str(dni)+"T")
    elif resto == 1:
        print("Su DNI es: " + str(dni)+"R")
    elif resto == 2:
        print("Su DNI es: " + str(dni)+"W")
    elif resto == 3:
        print("Su DNI es: " + str(dni)+"A")
    elif resto == 4:
        print("Su DNI es: " + str(dni)+"G")
    elif resto == 5:
        print("Su DNI es: " + str(dni)+"M")
    elif resto == 6:
        print("Su DNI es: " + str(dni)+"Y")
    elif resto == 7:
        print("Su DNI es: " + str(dni)+"F")
    elif resto == 8:
        print("Su DNI es: " + str(dni)+"P")
    elif resto == 9:
        print("Su DNI es: " + str(dni)+"D")
    elif resto == 10:
        print("Su DNI es: " + str(dni)+"X")
    elif resto == 11:
        print("Su DNI es: " + str(dni)+"B")
    elif resto == 12:
        print("Su DNI es: " + str(dni)+"N")
    elif resto == 13:
        print("Su DNI es: " + str(dni)+"J")
    elif resto == 14:
        print("Su DNI es: " + str(dni)+"Z")
    elif resto == 15:
        print("Su DNI es: " + str(dni)+"S")
    elif resto == 16:
        print("Su DNI es: " + str(dni)+"Q")
    elif resto == 17:
        print("Su DNI es: " + str(dni)+"V")
    elif resto == 18:
        print("Su DNI es: " + str(dni)+"H")
    elif resto == 19:
        print("Su DNI es: " + str(dni)+"L")
    elif resto == 20:
        print("Su DNI es: " + str(dni)+"C")
    elif resto == 21:
        print("Su DNI es: " + str(dni)+"K")
    elif resto == 22:
        print("Su DNI es: " + str(dni)+"E")

else:
    print("Los datos introducidos no son correctos")