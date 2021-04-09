cad = input("Introduzca su cadena de texto: ")

cont = 0
vocales = ['a','e','i','o','u','A','E','I','O','U']

for i in range(len(cad)):
    for h in range(len(vocales)):
        if cad[i] == vocales[h]:
            cont += 1

print("Su cadena tiene "+str(len(cad))+" caracteres, de los cuales "+str(cont)+" son vocales")

