def descuento(tipo, suma):
    if tipo == 0:
        return (suma*95) / 100
    else:
        return (suma*85) / 100


cliente = int( input("Introduza el tipo de cliente (0 / 1): "))
# Cliente 0-> desc 5%, cliente 1-> desc 15%
while cliente != 0 and cliente != 1:
    cliente = int( input("Por favor introduzca un tipo cde cliente valido (0 / 1): "))
cant = int( input("Introduzca la cantidad de productos a calcular: "))
subtotal = 0

for i in range(cant):
    print("Introduzca precio del producto", i+1, end=": ")
    sumar = int( input())
    subtotal += sumar

print(f"El subtotal es: {subtotal} \nCon el descuento aplicado se queda en: {descuento(cliente, subtotal)}")