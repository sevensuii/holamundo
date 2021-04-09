precio = float( input("Introduzca el precio: "))
cant = float( input("Introduzca la candtidad entregada: "))

bucle = True
if precio < 500 and cant < 500:
    if precio == cant:
        print("El cambio es: 0")
        bucle = False
    elif precio < cant:
        dinero = [100, 20, 10, 2, 1, 0.20, 0.10, 0.01]
        repes =  [  0,  0,  0, 0, 0,    0,    0,    0]
        cambio = round(cant - precio, 2)
        cont = 0
        while cambio != 0:
            if cambio < dinero[cont]:
                cont += 1
            else:
                cambio = round(cambio - dinero[cont], 2)
                repes[cont] += 1
    else:
        print("ERROR: la cantidad entragada es menor al precio")
        bucle = False
if bucle:
    print("Su cambio será:", round(cant - precio, 2))
    for i in range(len(dinero)):
        print(f"{dinero[i]}:\t{repes[i]}")