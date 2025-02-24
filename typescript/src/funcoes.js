"use strict";
// Declaração de uma função tradicional com tipagem explícita
// A função recebe dois parâmetros do tipo number e retorna um number
function calculaArea(base, altura) {
    return base * altura;
}
// Declaração de uma função arrow function com tipagem explícita
// Assim como na função anterior, os parâmetros são do tipo number e o retorno também é number
const calculaArea2 = (base, altura) => base * altura;
// Função que recebe um número variável de argumentos (...numeros) como um array de numbers
// O retorno é void, ou seja, a função não retorna nada explicitamente, apenas executa um console.log
function somar(...numeros) {
    // O método reduce poderia ser usado aqui para somar os números do array
    // numeros.reduce((acc, num) => acc + num, 0);
    console.log(numeros);
}
// Função que pode retornar dois tipos diferentes: number ou string
// TypeScript permite a definição de múltiplos tipos de retorno usando a união (|)
function teste() {
    if (10 > 5) {
        return "dez maior que 5"; // Retorna uma string
    }
    else {
        return 5; // Retorna um número
    }
}
const resultadoDoTeste = teste;
