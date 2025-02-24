"use strict";
class Pessoa {
    // O constructor inicializa os valores das propriedades
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    // Método público que retorna uma string
    dizOla() {
        return `${this.nome}, diz Olá`;
    }
}
// Criamos outra classe para representar uma conta bancária
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0; // `protected`: pode ser acessado por classes filhas, mas não fora delas
        this.numeroDaConta = numeroDaConta;
    }
    // Método `static`: pertence à classe, não a um objeto específico
    static retornaNumeroDoBanco() {
        return 123;
    }
    // Método `private`: só pode ser acessado dentro desta classe
    getSaldo() {
        return this.saldo;
    }
    // Método `public`: pode ser acessado por qualquer código que tenha acesso ao objeto
    depositar(valor) {
        this.saldo += valor;
    }
}
// Criamos uma classe que herda de ContaBancaria
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescrevendo o método depositar para alterar o comportamento
    depositar(valor) {
        this.saldo = valor * 2; // `saldo` pode ser acessado porque é `protected`
    }
}
// Criamos uma conta bancária
const contaDoPedro = new ContaBancariaPessoaFisica(123321);
// Acessando método estático diretamente da classe
ContaBancaria.retornaNumeroDoBanco();
