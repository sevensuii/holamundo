def convDECtoOCT(num):
    if num < 8:
        return str(num)
    else:
        return convDECtoOCT(num // 8) + str(num % 8)

#MAIN
valor = int( input("Introduzca el numero decimal: "))
print("Su valor en base octal es:", convDECtoOCT(valor))