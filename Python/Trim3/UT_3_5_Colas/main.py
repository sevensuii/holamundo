from queue import Queue
from random import randint
from Persona import Persona
import time

cola_fifo = Queue(7)
nombres = ["Paco", "Juan", "Adrian", "Raul", "Marta", "Lucia", "Angela", "Elena"]

for i in range(6):
    a = Persona(randint(5, 60), nombres[randint(0, 7)])
    cola_fifo.put(a)
    print(str(a) + "ha entrado en la cola")
    time.sleep(1)

recaudacion = 0

while cola_fifo.empty() == False:
    a = cola_fifo.get()
    recaudacion += a.getPrecioEntrada()
    print(str(a) + "ha pagado " + str(a.getPrecioEntrada()) + " euros y ha salido de la cola")
    time.sleep(1)
    if cola_fifo.empty():
        print("La cola ha quedado vacia")
        print("Se ha recadado un total de: " + str(recaudacion) + " euros")