def sumaArray( vec, ulPos):
    if ulPos == 0:
        return vec[ulPos]
    else:
        return (vec[ulPos] + sumaArray(vec,ulPos-1))


array = [2123, 312, 23, 45, 23, 45, 674, 54, 12, 34, 85]
lon = len(array)-1
suma = sumaArray(array, lon)
print(suma)