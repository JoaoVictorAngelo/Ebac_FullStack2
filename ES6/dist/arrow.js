"use strict";

var _this = void 0;
var minhaFuncao = function minhaFuncao() {
  return "Diz Olá";
};
console.log(minhaFuncao());
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: 'Fusca',
    fabricante: 'Volkwagem'
  };
};
console.log(retornaUmCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    _this.velocidadeAtual -= 10;
  }
};