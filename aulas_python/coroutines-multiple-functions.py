def func1():
    print('Function 1 part 1')

    yield
    print('Function 1 part 2')

    yield
    print('Function 1 part 3')

    yield
    print('Function 1 part 4')

    yield
    print('Function 1 part 5')


def func2():
    print('Function 2 part 1')

    yield
    print('Function 2 part 2')

    yield
    print('Function 2 part 3')

    yield
    print('Function 2 part 4')

    yield
    print('Function 2 part 5')


try:

    a = func1()
    b = func2()

    next(a)    # Vai executar a Função 1 - parte 1
    next(b)    # Vai executar a Função 2 - parte 1
    next(a)    # Vai executar a Função 1 - parte 2
    next(a)    # Vai executar a Função 1 - parte 3
    next(b)    # Vai executar a Função 2 - parte 2
    next(b)    # Vai executar a Função 2 - parte 3
    next(b)    # Vai executar a Função 2 - parte 4
    next(a)    # Vai executar a Função 1 - parte 4
    next(a)    # Vai executar a Função 1 - parte 5 e lançar a exceção StopIteration


except StopIteration as e:
    pass