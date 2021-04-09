tildes = ['á', 'é', 'í', 'ó', 'ú']
notildes = ['a', 'e', 'i', 'o', 'u']
codificado = ""
nombre = input("Introduzca su nombre: ").lower()
apellido1 = input("Introduzca su primer apellido: ").lower()
apellido2 = input("Introduzca su segundo apellido: ").lower()

letra = nombre[0]  # coge la primera letra del nombre y concatena
if letra in tildes:
    for i in range(len(tildes)):
        if letra == tildes[i]:
            letra = notildes[i]
codificado += letra
for i in range(3): # coge las 3 primeras letras del primer apellido y contatena
    letra = apellido1[i]
    for i in range(len(tildes)):
        if letra == tildes[i]:
            letra = notildes[i]
    codificado += letra

for i in range(3): # coge las 3 primeras letras del segundo apellido y contatena
    letra = apellido2[i]
    for i in range(len(tildes)):
        if letra == tildes[i]:
            letra = notildes[i]
    codificado += letra

print("Su nombre codificado es:", codificado)