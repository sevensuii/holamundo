num = int( input("Introduzca la cantidad de numeros que vaya a introducir: "))

pares = 0
impares = 0

for i in range(num):
    aux = int( input("Introduzca el numero " + str(i+1) + " : "))
    if aux % 2:
        impares += 1
    else:
        pares += 1

print("Ha introducido "+str(pares)+" numero(s) pares(s)")
print("Ha introducido "+str(impares)+" numero(s) impares(s)")