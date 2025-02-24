"use strict";
//Um namespace em TypeScript é uma forma de organizar e agrupar código dentro de um escopo isolado, 
// evitando conflitos de nomes entre variáveis, funções e classes.
var casting;
(function (casting) {
    // Variável declarada com tipo 'any', o que significa que pode armazenar qualquer valor
    let idade = 25;
    // Type casting para 'number', permitindo usar métodos de número, como 'toFixed'
    idade.toFixed();
    // Type casting para 'string', permitindo acessar propriedades e métodos de string, como 'length'
    idade.length;
    // Type casting para 'string[]' (array de strings), o que causaria erro em tempo de execução
    // pois 'idade' não é um array, e 'forEach' espera um array
    idade.forEach(x => {
        console.log(x);
    });
    // Conversão forçada de número para string usando 'unknown' como intermediário
    // Primeiro, 35 é convertido para 'unknown', depois para 'string'
    let nome = 35;
    // O TypeScript aceita essa conversão, mas pode gerar comportamento inesperado em tempo de execução
    /* nome.  */
    // O ponto aqui sugere que o usuário queria acessar métodos de string
})(casting || (casting = {}));
