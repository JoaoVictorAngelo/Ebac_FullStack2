"use strict";
class Pessoa {
    // No constructor, devemos seguir a ordem: primeiro os obrigatórios, depois os opcionais
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Método que retorna uma string, e isso é indicado explicitamente
    dizOla() {
        return `${this.nome}, diz Olá`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numeroDaConta = numeroDaConta;
    }
    static retornaNumeroDoBanco() {
        return 123;
    }
    getSaldo() {
        return this.saldo = this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123321);
// contaDoPedro.
ContaBancaria.retornaNumeroDoBanco();
