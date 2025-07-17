def func():
    x = 5
    print('Function Part 1')

    yield x
    x += 7
    print('Function part 2')

    yield x

    print('Function part 3')


try:
    # função principal
    y = func()

    z = next(y)     # Primeira parte da função é executada
    print(z)

    z = next(y)     # Segunda parte da função é executada
    print(z)

    z = next(y)     # Terceira parte da função é executada e a exceção StopIteration é lançada
    print(z)        # Este print não será executado

except StopIteration as e:
    pass
