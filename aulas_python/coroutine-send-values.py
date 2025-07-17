def func():
    print('Function part 1')

    x = yield
    print(x)
    print('Function part 2')

    a = yield
    print(a)
    print('Function part 3')


try:
    y = func()

    next(y)         # Primeira parte da função executada, usamos next() para alcançar o primeiro yield

    y.send(6)       # Segunda parte da função executada e o valor 6 é enviado para o yield

    y.send(12)      # Segunda parte da função executada novamente com o valor 12, e a exceção StopIteration é lançada

except StopIteration as e:
    pass  # Tratamento da exceção (ignorado nesse caso)
