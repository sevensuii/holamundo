








































'''
print("*****Calculadora simple*****")

opcion = 99999
num1, num2, res = 0, 0, 0

while opcion != 0:
    print(
        " ***********************************************\n",
        "******     0) Salir                     *******\n",
        "******     1) Introducir numero uno     *******\n",
        "******     2) Introducir numero dos     *******\n",
        "******     3) Suma                      *******\n",
        "******     4) Resta                     *******\n",
        "******     5) Multiplicacion            *******\n",
        "******     6) Divison                   *******\n",
        "***********************************************\n"
    )
    opcion = int( input("Introduzca una opcion: "))
    if opcion == 1:
        num1 = int( input("Introduzca numero 1: "))
        print("\n\n\n")
    elif opcion == 2:
        num2 = int( input("Introduzca numero 1: "))
        print("\n\n\n")
    elif opcion == 3:
        res = num1 + num2
        print("El resultado es:", res)
        print("\n\n\n")
    elif opcion == 4:
        res = num1 - num2 
        print("El resultado es:", res)
        print("\n\n\n")
    elif opcion == 5:
        res = num1 * num2
        print("El resultado es:", res)
        print("\n\n\n")
    elif opcion == 6:
        res = num1 / num2
        print("El resultado es:", res)
        print("\n\n\n")
    elif opcion == 0:
        print("Hasta la proxima!!")
        break;
    else:
        print("La opcion introducida no es valida")
'''
