def cabalistico(cad):
    repes = [] # se almacenaran las veces que se repite el 1
    ultimo1 = 0
    ultimo2 = 0
    cont = 0
    for i in cad:
        ultimo1 = i
        if i == '1':
            cont += 1
        elif i == '0' and int(ultimo1) != int(ultimo2):
            repes.append(cont)
            cont = 0
        
        ultimo2 = i 
    if cont:
        repes.append(cont)
    if repes:  
        res = 1
        for i in repes:
            res *= i
        return res
    else:
        print("La cadena introducida no tiene ningun 1!!")


#MAIN
seq = str(input("Introduzca la secuencia de 0 y 1: ").replace(' ', ''))
print("El numero cabalistico es:", cabalistico(seq))