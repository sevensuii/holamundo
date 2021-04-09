a = int( input("Dime el primer operador: "))
b = int( input("Dime el segundo operador: "))

suma = int( a+b )
resta = int( a-b )
mult = int( a*b )
div = int( a//b )
mod = int( a%b )

print("Los resultados son: \nSuma: " + str(suma)+"\nResta: " + str(resta) + "\nMultiplicacion: " + str(mult) + "\nDivision: " + str(div) + "," + str(mod) )