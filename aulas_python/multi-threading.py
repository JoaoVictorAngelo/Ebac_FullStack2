import time
import threading


def calc_square(numbers):
    print('Calculate square numbers: ')
    for i in numbers:
        # atraso de tempo
        # time.sleep(2)
        print('square: {} '.format(str(i * i)))


def calc_cube(numbers):
    print('Calculate cube numbers: ')
    for i in numbers:
        # atraso de tempo
        # time.sleep(2)
        print('cube: {} '.format(str(i * i * i)))


if __name__ == '__main__':
    arr = [2, 3, 8, 9]
    t1 = threading.Thread(target=calc_square, args=(arr,))
    t2 = threading.Thread(target=calc_cube, args=(arr,))
    # criando duas threads aqui: t1 e t2
    t1.start()
    t2.start()
    # iniciando as threads em paralelo usando a função start
    t1.join()
    # este join() vai esperar até a função calc_square() terminar
    t2.join()
    # este join() vai esperar até a função calc_cube() terminar
    print('Main Thread Here!!')
    print('Successes!')
