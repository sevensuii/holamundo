mat = [ ['0','0','0','0','0','1','0','1','0','1','0','1','0','1','0','1','0','1','0','1', "Pedro"], 
        ['0','0','1','0','1','0','1','0','1','0','1','1','0','1','1','1','0','1','1','1', "Juan"], 
        ['0','0','1','0','0','0','1','0','0','1','0','0','0','0','0','0','1','0','0','1', "Diego"] ]

adn = input("Introduzca la cadena ADN del sospechoso(20 caracteres): ")
coinciencia = []
rep = False
mejor, mejorpos = 0, 0

while not rep:
    if len(adn) == 20:
        for i in range(len(mat)):
            cont = 0
            for j in range(len(mat[i])-1):
                if adn[j] == mat[i][j]:
                    cont += 1
            coinciencia.append(cont)
            if coinciencia[i] > mejor:
                mejor = coinciencia[i]
                mejorpos = i
        print(f"El culpable es {mat[mejorpos][20]} con un parentezco del {(mejor/20)*100}")
        rep = True
    else:
        print("Cadena ADN de tamaño no valido")
        adn = input("Vuelva a introducir: ")
