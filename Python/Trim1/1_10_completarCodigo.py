num1 = int( input("Introduzca el primer numero: "))
num2 = int( input("Introduzca el segundo numero: "))

if num1 <= num2:
    print(str(num1)+" no es mayor que "+ str(num2))

if int(num2) > 0:
    print(str(num2)+" es positivo")

if int(num1) != 0:
    print(str(num1)+" es negativo o distinto de cero")

if int(num1+1) < int(num2):
    print("Incrementar en 1 unidad el valor de "+ str(num1)+ " no lo hace mayor o igual que "+ str(num2))
