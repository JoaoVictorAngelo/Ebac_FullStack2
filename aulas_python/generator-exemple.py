# Função geradora que utiliza 'yield' para pausar e retomar a execução
def my_gen():
    # Inicializa a variável 'n' com o valor 1
    n = 1
    print(f'Primeiro print, n é igual a {n}')

    # Pausa aqui e retorna o valor de 'n'. A execução será retomada do próximo ponto quando o próximo 'next()' for chamado.
    yield n

    # Incrementa 'n' para 2
    n += 1
    print(f'Segundo print, n é igual a {n}')

    # Retorna o novo valor de 'n' (2) e pausa novamente
    yield n

    # Incrementa 'n' para 3
    n += 1
    print(f'Terceiro print, n é igual a {n}')

    # Retorna o novo valor de 'n' (3) e pausa novamente
    yield n

    # Incrementa 'n' para 4
    n += 1
    print(f'Quarto print, n é igual a {n}')

    # Retorna o novo valor de 'n' (4) e encerra a execução do gerador
    yield n


gen = my_gen()   # cria o gerador, mas não executa nada ainda

next(gen)        # imprime "Primeiro print..." e retorna 1
next(gen)        # imprime "Segundo print..." e retorna 2
next(gen)        # imprime "Terceiro print..." e retorna 3
next(gen)        # imprime "Quarto print..." e retorna 4
next(gen)        # gera um StopIteration (fim da função)


