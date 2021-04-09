a = int( input("Introduzca el primer numero: "))
b = int( input("Introduzca el segundo numero: "))
c = int( input("Introduzca el tercer numero: "))

if a < b:
    if b < c:
        print(str(a)+", "+str(b)+", "+str(c))
    else:
        if a < c:
            print( str(a)+", "+str(c)+", "+str(b))
        else:
            print(str(c)+", "+str(a)+", "+str(b))
        
else:
    if a < c:
        print(str(b)+", "+str(a)+", "+str(c))
    else:
        if b < c:
            print(str(b)+", "+str(a)+", "+str(c))
        else:
            print(str(c)+", "+str(b)+". "+str(a))
