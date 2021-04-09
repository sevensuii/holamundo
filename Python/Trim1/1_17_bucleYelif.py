num1 = int(input("Introduzca el numero 1: "))
num2 = int(input("Introduzca el numero 2: "))

op = 1

while op != 0:
    print("##############################")
    print("###\t0) Salir")
    print("##############################")
    print("###\top1: "+str(num1)+"\top2: "+str(num2))
    print("###\t1) Modificar numero 1")
    print("###\t2) Modificar numero 2")
    print("##############################")
    print("###\t3) Sumar")
    print("###\t4) Restar")
    print("###\t5) Multiplicar")
    print("###\t6) Dividir")
    print("##############################", end="\n\n")
    op = int( input("Escoja una opcion: "))
    
    if not op:
        None
    elif op == 1:
        num1 = int( input("Vuelva a introducir el numero 1: "))
    elif op == 2:
        num2 = int( input("Vuelva a introducir el numero 2: "))
    elif op == 3:
        print("La suma es: "+str(num1+num2), end="\n\n")
    elif op == 4:
        print("La resta es: "+str(num1-num2), end="\n\n")
    elif op == 5:
        print("La multiplicacion es: "+str(num1*num2), end="\n\n")
    elif op == 6:
        print("La division es: "+str(num1/num2), end="\n\n")
    
    
        