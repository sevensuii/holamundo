frase = ""
print("Introduzca las palabras que desea añadir, terminando con 'salir' siendo la ultima \
palabra introducida")
a = 'nada'

while a != 'salir':    
    a = input().lower().replace(' ', '')
    if a != 'salir':
        frase += a
        frase += '_'
        
print("Su frase es la siguiente: ", frase.upper())
