# Calculo de un numero factorial

num = int( input("Introduzca el factorial a calcular: "))
acum1, acum2 = 1, 1

for i in range(1, num+1):
    acum1 *= i

print("FOR -> " + "El factorial de " + str(num)+ " es " + str(acum1) )

j = 0
while j < num:
    j += 1
    acum2 *= j

print("WHILE -> " + "El factorial de " + str(num)+ " es " + str(acum1) )