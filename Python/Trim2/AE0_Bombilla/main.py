from Casa import *
from Bombilla import *

bombillas_en_casa = Casa()

habitaciones = int(input("Cuantas habitaciones desea añadir?: "))
for i in range(habitaciones):
    hab = input("Nombre de la habitacion: ").capitalize()
    print("El estado de la bombilla:\n0. Encendida\n1. Apagada")
    modo = int(input())
    modof = False
    if modo == 0:
        modof = True
    luminosidad = int(input("Introduzca la luminosidad de la bombilla (si es 0 se usara el valor por defecto (128): "))
    if luminosidad == 0:
        luminosidad = 128
    bomb1 = Bombilla(modof, luminosidad)
    bombillas_en_casa.aniadeBombilla(hab, bomb1)

print("\n\nEn tu casa estan las siguientes bombillas: ")
print(bombillas_en_casa)