def primosRelativos(num1, num2):
    if num2 < num1:
        num1, num2 = num2, num1
    mcd = 0
    for i in range(1, num1+1):
        if num1 % i == 0 and num2 % i == 0:
            mcd = i
        
    if mcd == 1:
        return True
    else:
        return False


# Main
op1 = int(input("Introduzca el numero 1: "))
op2 = int(input("Introduzca el numero 2: "))

valor = primosRelativos(op1, op2)
if valor:
    print("Son primos relativos")
else:
    print("No son primos relativos")
