import multiprocessing

# Criando uma variável global
results = []


def calc_square(numbers):
    global results
    for i in numbers:
        print('square: ', str(i*i))
        results.append(i*i)
        print('dentro do processo: ' + str(results))


if __name__ == "__main__":
    arr = [2, 3, 8, 9]
    p1 = multiprocessing.Process(target=calc_square, args=(arr,))
    # criando um processo aqui: p1
    p1.start()
    # iniciando o processo em paralelo usando a função start
    p1.join()
    # este join() vai esperar até a função calc_square() terminar
    print('result : ' + str(results))
    # Este print não funciona corretamente aqui, precisamos imprimir dentro do processo
    print('Sucesso')
