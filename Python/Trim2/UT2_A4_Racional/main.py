from clases.Racional import *

num1 = Racional(6,-4)
num2 = Racional(-8,-5)

num3 = num1.sumaFraccion(num2)
num4 = num1.restaFraccion(num2)
num6 = num1.multiplicaFracciones(num2)
num7 = num1.divideFracciones(num2)


print(num3, "\t", num4)
print(num6, "\t", num7)

#num5 = num1
#print(num5)

if num1 < num2:
    print("num1 es menor que num2")
