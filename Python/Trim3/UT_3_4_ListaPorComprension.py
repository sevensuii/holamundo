x = [8, 2, 3, -1, 2, -5, 7]
personas = ["Sara", "Pedro", "Miguel", "Juanito"]
print(x, end="\n\n")
print(personas, end="\n\n")

print("1. El cubo de cada elemento de la lista x")
cubo = [i**3 for i in x]
print(cubo, end="\n\n")

print("2. El cuadrado de los elementos impares de x")
cuadrado_impares = [i**2 for i in x if i % 2 != 0]
print(cuadrado_impares, end="\n\n")

print("3. El cuadrado de los elementos pares y positivos de x")
cuadrado_pares = [i**2 for i in x if i % 2 == 0 and i >= 0]
print(cuadrado_pares, end="\n\n")

print("4. Los elementos de las personas con más de cinco caracteres")
personas_5_caracteres = [i for i in personas if len(i) > 5]
print(personas_5_caracteres, end="\n\n")

print("5. Los elementos de personas que contienen la vocal e")
personas_vocal_e = [i for i in personas if 'e' in i]
print(personas_vocal_e, end="\n\n")

print("6. Los elementos de personas que contienen la vocal o y además tienen una longitud \
de al menos seis caracteres")
personas_o_5 = [i for i in personas if 'o' in i and len(i) >= 6]
print(personas_o_5, end="\n\n")
