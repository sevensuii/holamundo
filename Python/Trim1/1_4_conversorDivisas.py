eur = float(input("Introduzca el importe en euros: "))

dol = float( eur * 1.17 )
lib = float( eur * 0.91 )
lir = float( eur * 9.15 )

print("El valor en EUR equivale a:\n" + str(dol) + " dolares\n" + str(lib) + " libras\n" + str(lir) + " liras turcas")