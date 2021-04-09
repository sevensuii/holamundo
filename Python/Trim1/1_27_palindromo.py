def esPalindromo(cad1):
    #cad1 = [ele for ele in cad1 if ele.strip()]
    cad1 = list(cad1)
    #cad1 = cad1.replace(' ', '')
    cad2 = cad1[:]
    cad2.reverse()
    for i in range(len(cad1)):
        if not cad1[i] == cad2[i]:
            return False
    return True

#https://www.geeksforgeeks.org/python-ways-to-remove-multiple-empty-spaces-from-string-list/

cad = input("Introduzca la cadena: ").lower().replace(' ', '')
print()
asd = esPalindromo(cad)
if asd:
    print("La cadena de texto es palindroma")
else:
    print("La cadena de texto no es palindroma")    
