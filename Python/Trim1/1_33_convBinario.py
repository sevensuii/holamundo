def decBin(num):
    if num < 2:
        return str(1)
    else:
        return decBin(num // 2) + str( num % 2)

dec = int( input("Intrduzca el numero decimal a traducir: "))
traduccion = ""
traduccion += decBin(dec)
print(f"En binario es: {traduccion}")