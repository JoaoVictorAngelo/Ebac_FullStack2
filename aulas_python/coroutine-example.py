def func():
    print('Funcao iniciada')

    # Pausa
    yield 

    print('Fim da Funcao')

try:
    y = func()
    print(type(y))
    next(y)
    next(y)

except StopIteration as e:
    pass
