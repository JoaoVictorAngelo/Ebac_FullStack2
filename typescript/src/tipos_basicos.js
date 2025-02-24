"use strict";
let estaChovendo = false;
// estaChovendo = 'true' // exemplo de erro quando declaramos um tipo a uma variavel nao podemos mudala
let idade = 20;
let altura = 1.75;
// o TypeScript nao faz diferenca entre numeros float
const nacionalidade = 'Brazileiro';
console.log(typeof (estaChovendo), typeof (idade), typeof (altura), typeof (nacionalidade));
const colegas = ['Laura', 'Pedro'];
// Declaração de um array de strings usando a notação mais comum (tipo[]).
const tecnologias = ['html', 'css', 'js'];
// Outra forma de declarar um array de strings, usando a sintaxe generics (Array<tipo>).
const notas = [7, 9, 5, 8];
// Um array de números que é somente leitura. Métodos como push(), pop() e splice() não podem ser usados.
const listaTupla = ["João", true, 27];
// Declaração de uma tupla, um array de tamanho fixo com tipos específicos para cada posição.
const listaTupla2 = ["Bianca", false, 25];
// Outra forma de declarar uma tupla, utilizando nomes para os elementos para melhor legibilidade.
let idadeDaAna = 25;
// A variável pode armazenar tanto um número quanto uma string.
idadeDaAna = '25';
// Como a tipagem permite number | string, essa atribuição é válida.
let dadosDaApi;
// A variável pode receber qualquer tipo de dado, pois foi declarada com `any`.
dadosDaApi = [1, 2, 3];
// Agora `dadosDaApi` contém um array de números.
dadosDaApi = 10;
// Agora contém um número.
dadosDaApi = 'string';
// Agora contém uma string.
dadosDaApi = false;
// Agora contém um booleano.
// Exemplo de tipagem implícita em TypeScript
let curso = 'Front-End'; // TypeScript infere automaticamente que 'curso' é do tipo string
// curso = 10; // ❌ Erro! Não é possível atribuir um número a uma variável do tipo string
// A tipagem implícita faz com que TypeScript entenda que a variável 'curso' só pode armazenar strings.
// O mesmo acontece para outros tipos, como number, boolean, etc.
