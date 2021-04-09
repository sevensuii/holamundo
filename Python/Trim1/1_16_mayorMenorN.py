rep = int(input("Introduzca la cantida de numeros que va a introducir: "))

mayor = 0
menor = 0


for i in range(rep):
    print("Introduzca el numero "+str(i+1)+" : ", end="")
    num = int( input())
    if not i:
        mayor = num
        menor = num
    if num > mayor:
        mayor = num
    if num < menor:
        menor = num

print("El mayor es el "+str(mayor)+"\nEl menor es el "+str(menor))