hora = int( input("Introduzca la hora: "))
mins = int( input("Introduzca los minutos: "))
segs = int( input("Introduzca los segundos: "))

if segs == 59:
    segs = 0
    mins = mins + 1
    if mins == 60:
        mins = 0
        hora = hora + 1
        if hora == 24:
            hora = 0
        else:
            hora = hora + 1
else:
    segs = segs + 1

print("La hora es: "+str(hora)+"(h) "+str(mins)+"(m) "+str(segs)+"(s)")    
    