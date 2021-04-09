cad2 = input("Introduzca el texto a traducir: ")
cad2 = cad2.upper();

array = ""

for i in range(len(cad2)):
    if cad2[i] == 'O':
        array += '0'
    elif cad2[i] == 'A':
        array += '4'
    elif cad2[i] == 'E':
        array += '3'
    elif cad2[i] == 'I':
        array += '1'
    elif cad2[i] == 'S':
        array += '5'
    elif cad2[i] == 'T':
        array += '7'
    elif cad2[i] == 'G':
        array += '6'
    elif cad2[i] == 'B':
        array += '8'
    else:
        array += cad2[i]

# print(array)
# array = "".join(array)
print("Su cadena en lenguaje hacker es: "+str(array))